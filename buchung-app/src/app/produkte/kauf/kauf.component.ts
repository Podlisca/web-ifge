import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { AnmeldeProdukt, AnmeldungService, Produktkauf } from 'src/app/+core/gen';

@Component({
  selector: 'app-kauf',
  standalone: true,
  templateUrl: './kauf.component.html',
  styleUrls: ['./kauf.component.css'],
  imports: [CommonModule, MatRadioModule, MatButtonModule, FormsModule]
})
export class KaufComponent implements OnInit {

  @Input() produkt?: AnmeldeProdukt

  preisId?: number

  api = inject(AnmeldungService);

  constructor() { }

  ngOnInit() {
  }

  kaufe() {
    const kauf: Produktkauf = {
      email: "asd12@leichtware.at",
      produktId: this.produkt?.id,
      preisId: this.preisId,
      vorname: "Antje",
      nachname: "Stimpfl",
      geschlecht: 'M'
    }
    this.api.kaufeProdukt(kauf).subscribe(res => console.log(res));
  }
}
