import { CommonModule, DOCUMENT } from '@angular/common';
import { Component, EventEmitter, Inject, Input, OnInit, Output, Renderer2, inject } from '@angular/core';
import { FormGroup, FormsModule, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { Observable, catchError, debounceTime, distinctUntilChanged, filter, of, shareReplay, switchMap } from 'rxjs';
import { AnmeldeProdukt, AnmeldungService, Geschlecht, Produktkauf } from 'src/app/+core/gen';
import { defaultConfig } from 'src/app/app.config';
import { environment } from 'src/environments/environment';

const RECAPTCHA_API = 'https://www.google.com/recaptcha/api.js';
declare let grecaptcha: any;

@Component({
  selector: 'app-kauf',
  standalone: true,
  templateUrl: './kauf.component.html',
  styleUrls: ['./kauf.component.css'],
  imports: [CommonModule, MatRadioModule, MatButtonModule, FormsModule,
    MatInputModule, MatIconModule, MatFormFieldModule,
    ReactiveFormsModule, MatCheckboxModule, MatSnackBarModule],
  providers: [
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'outline' } }
  ]
})
export class KaufComponent {

  @Input() recaptchaSiteKey: string | undefined = "6Lce7dYZAAAAAH25vMIzl-FWL4vgYmyMC9Fhhoj8";
  @Input({ required: true }) produkt!: AnmeldeProdukt
  @Output() back = new EventEmitter<void>();
  @Output() anmeldung = new EventEmitter<number>();

  api = inject(AnmeldungService);

  form!: FormGroup;
  loading = false;

  codeValidation$?: Observable<number | undefined>

  constructor(
    private fb: NonNullableFormBuilder,
    private snack: MatSnackBar,
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document,
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      produktId: [this.produkt.id, Validators.required],
      anrede: [Geschlecht.W, Validators.required],
      vorname: ["", [Validators.required, Validators.maxLength(45)]],
      nachname: ["", [Validators.required, Validators.maxLength(45)]],
      email: ["", [Validators.required, Validators.email]],
      notiz: ["", [Validators.maxLength(512)]],
      agb: [false, Validators.requiredTrue],
      datenschutz: [undefined, Validators.required],
      widerruf: [undefined, Validators.required],
      newsletter: [false],
      preis: [undefined, Validators.required],
      aktionscode: [""],
      strasse: ["", Validators.required],
      nr: ["", Validators.required],
      plz: ["", [Validators.minLength(4), Validators.maxLength(6), Validators.required]],
      ort: ["", Validators.required],
    });
    this.codeValidation$ = this.form.controls['aktionscode'].valueChanges.pipe(
      distinctUntilChanged(),
      debounceTime(500),
      switchMap(code => code?.length > 2 ? this.api.validateGutscheincode(this.produkt.id!, code) : of(undefined)),
      catchError(_ => of(undefined)),
      shareReplay(1)
    )
  }

  ngAfterViewInit(): void {
    const scriptElement = this.loadJsScript(this.renderer, RECAPTCHA_API + "?render=" + this.recaptchaSiteKey);
    scriptElement.onerror = () => {
      console.log('Could not load the Google API Script!');
    }
  }

  kaufRequest() {
    this.loading = true;
    grecaptcha.ready(() => {
      grecaptcha.execute(this.recaptchaSiteKey, { action: 'submit' }).then((token: any) => {
        // emit conversion callback with effective betrag
        this.anmeldung.emit(this.form.controls['preis'].value.betrag);

        this.kaufe(token);
      });
    });
  }

  kaufe(token: string) {
    const kauf: Produktkauf = this.form.value;
    kauf.recaptcha_token = token;
    // extract id from Preis
    kauf.preis = this.form.controls['preis'].value.id;

    if (this.produkt.seminartage) {
      kauf.seminartage = this.produkt.seminartage.map(s => s.id!)
    }
    this.api.kaufeProdukt(kauf).subscribe({
      next: res => {
        if (environment.production) {
          setTimeout(() => {
            this.loading = false;
            location.href = defaultConfig.url_success;
          }, 700)
        }
        else {
          this.loading = false;
        }
      },
      error: err => {
        this.loading = false;
        if (typeof err?.message == 'string') {
          this.snack.open("Leider ist beim Kauf ein Fehler aufgetreten: " + err.message, "X", { duration: 7000 });
        } else {
          this.snack.open("Leider ist beim Kauf ein Fehler aufgetreten.", "X", { duration: 7000 });
        }
      }
    });
  }

  goBack() {
    this.back.emit();
  }

  private loadJsScript(renderer: Renderer2, src: string): HTMLScriptElement {
    const script = renderer.createElement('script');
    script.type = 'text/javascript';
    script.src = src;
    renderer.appendChild(this.document.body, script);
    return script;
  }
}
