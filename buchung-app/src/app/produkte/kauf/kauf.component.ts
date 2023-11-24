import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output, inject } from '@angular/core';
import { FormGroup, FormsModule, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { AnmeldeProdukt, AnmeldungService, Geschlecht, Produktkauf } from 'src/app/+core/gen';

@Component({
  selector: 'app-kauf',
  standalone: true,
  templateUrl: './kauf.component.html',
  styleUrls: ['./kauf.component.css'],
  imports: [CommonModule, MatRadioModule, MatButtonModule, FormsModule, MatInputModule, MatIconModule, MatFormFieldModule, ReactiveFormsModule, MatCheckboxModule],
  providers: [
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'outline' } }
  ]
})
export class KaufComponent implements OnInit {

  @Input({ required: true }) produkt!: AnmeldeProdukt
  @Output() back = new EventEmitter<void>();

  api = inject(AnmeldungService);

  url_dsgvo = ""

  form!: FormGroup

  constructor(
    private fb: NonNullableFormBuilder
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
      strasse: [""],
      nr: [""],
      plz: [""],
      ort: [""],
    });
  }

  kaufe() {
    const kauf: Produktkauf = this.form.value;

    //   email: "asd12@leichtware.at",
    //   produktId: this.produkt?.id,
    //   preisId: this.preisId,
    //   vorname: "Antje",
    //   nachname: "Stimpfl",
    //   geschlecht: 'M'
    // }
    this.api.kaufeProdukt(kauf).subscribe(res => {
      console.log(res);
    });
  }

  goBack() {
    this.back.emit();
  }
}
