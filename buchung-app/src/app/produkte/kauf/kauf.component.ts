import { CommonModule, DOCUMENT, Location } from '@angular/common';
import { Component, EventEmitter, Inject, Input, OnInit, Output, Renderer2, inject } from '@angular/core';
import { FormGroup, FormsModule, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { AnmeldeProdukt, AnmeldungService, Geschlecht, Produktkauf } from 'src/app/+core/gen';
import { defaultConfig } from 'src/app/app.config';

const RECAPTCHA_API = 'https://www.google.com/recaptcha/api.js';
declare let grecaptcha: any;

@Component({
  selector: 'app-kauf',
  standalone: true,
  templateUrl: './kauf.component.html',
  styleUrls: ['./kauf.component.css'],
  imports: [CommonModule, MatRadioModule, MatButtonModule, FormsModule, MatInputModule, MatIconModule, MatFormFieldModule, ReactiveFormsModule, MatCheckboxModule, MatSnackBarModule],
  providers: [
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'outline' } }
  ]
})
export class KaufComponent implements OnInit {

  @Input() recaptchaSiteKey: string | undefined = "6Lce7dYZAAAAAH25vMIzl-FWL4vgYmyMC9Fhhoj8";
  @Input({ required: true }) produkt!: AnmeldeProdukt
  @Output() back = new EventEmitter<void>();
  @Output('submit') anmeldung = new EventEmitter<void>();

  api = inject(AnmeldungService);

  url_dsgvo = ""
  recaptchaResponse: string = "";

  form!: FormGroup


  constructor(
    private fb: NonNullableFormBuilder,
    private snack: MatSnackBar,
    private location: Location,
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document,
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      produktId: [this.produkt.id, Validators.required],
      anrede: [Geschlecht.W, Validators.required],
      vorname: ["", Validators.required],
      nachname: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      notiz: ["", [Validators.maxLength(400)]],
      agb: [false, Validators.requiredTrue],
      datenschutz: [undefined, Validators.required],
      widerruf: [undefined, Validators.required],
      preis: [undefined, Validators.required],
      aktionscode: [""],
      strasse: ["", Validators.required],
      nr: ["", Validators.required],
      plz: ["", [Validators.minLength(4), Validators.maxLength(6), Validators.required]],
      ort: ["", Validators.required],
    });
  }

  ngAfterViewInit(): void {
    const scriptElement = this.loadJsScript(this.renderer, RECAPTCHA_API + "?render=" + this.recaptchaSiteKey);
    scriptElement.onerror = () => {
      console.log('Could not load the Google API Script!');
    }
  }

  kaufRequest() {
    grecaptcha.ready(() => {
      grecaptcha.execute(this.recaptchaSiteKey, { action: 'submit' }).then((token: any) => {
        // emit callback hook
        this.anmeldung.emit();

        this.kaufe(token);
      });
    });
  }

  kaufe(token: string) {
    const kauf: Produktkauf = this.form.value;
    kauf.recaptcha_token = token;

    if (this.produkt.seminartage) {
      kauf.seminartage = this.produkt.seminartage.map(s => s.id!)
    }
    this.api.kaufeProdukt(kauf).subscribe({
      next: res => {
        console.log(res);
        location.href = defaultConfig.url_success;
      },
      error: err => this.snack.open("Leider ist beim Kauf ein Fehler aufgetreten.", "X", { duration: 5000 })
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
