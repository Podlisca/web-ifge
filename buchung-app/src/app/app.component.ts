import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { AnmeldeProdukt, AnmeldeProduktQuery } from './+core/gen';
import { AnmeldungComponent } from './anmeldung/anmeldung.component';
import { LwrBookingEvent, defaultConfig } from './app.config';
import { KaufComponent } from './produkte/kauf/kauf.component';
import { ProdukteComponent } from './produkte/produkte.component';


@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [
    CommonModule,
    AnmeldungComponent,
    ProdukteComponent,
    MatButtonModule,
    KaufComponent,
  ],
})
export class AppComponent implements OnInit {

  config = defaultConfig;

  _vorlagen: string[] = [];
  @Input() set vorlagen(val: string) {
    this._vorlagen = val.split(";");
  }

  _produkte: string[] = [];
  @Input() set produkte(val: string) {
    this._produkte = val.split(";");
  }

  _lehrplaene: string[] = [];//["Fortbildung: Die Kunst des Utilisierens"];
  @Input() set lehrplaene(val: string) {
    this._lehrplaene = val.split(";");
  }

  @Input() recaptchaSiteKey: string | undefined = "6Lce7dYZAAAAAH25vMIzl-FWL4vgYmyMC9Fhhoj8";

  @Input() text = "Jetzt verbindlich anmelden";

  @Output('submit') anmeldung = new EventEmitter<void>();

  private continueListener?: (t: any) => {};
  private terminSelectListener?: (t: any) => {};
  private successListener?: (t: any) => {};

  step = 0;
  selection?: AnmeldeProdukt
  query?: AnmeldeProduktQuery;

  constructor() {
    this.configure();
  }

  ngOnInit() {
    // console.log("ngOnInit vorlagen", this._vorlagen)
    // console.log("ngOnInit produkte", this._produkte)
    // console.log("ngOnInit lehrplaene", this._lehrplaene)
    this.query = {
      produktNamen: this._produkte,
      // ...this.produkte,
      // "Eintagesaufstellung 6 Stunden",
      // "Freischaltung Onlineakademie",
      // "Tiercoaching: Intensivtraining in Pinkafeld 2024",
      // "LSB 17 Sonntag St. Pölten"],
      // ],
      vorlagenNamen: this._vorlagen,        // "Familienaufstellung Eintages Seminar",
      lehrplaene: this._lehrplaene
    }
  }

  next() {
    this.step = 1;
    if (this.continueListener) {
      this.continueListener(this.selection);
    }
  }

  private configure() {
    window.lwrData?.forEach(d => {
      const [key, val] = d;
      if (key == "config") {
        this.config = Object.assign(this.config, val);
      }
      else if (key == LwrBookingEvent.selectTermin) {
        this.terminSelectListener = d[1];
      }
      else if (key == LwrBookingEvent.continue) {
        this.continueListener = d[1];
      }
      else if (key == LwrBookingEvent.success) {
        this.successListener = d[1];
      }
    });

    // set up css variables
    document.documentElement.style.setProperty("--ltw-color-bg", this.config.color_hintergrund);
    document.documentElement.style.setProperty("--ltw-color-btn", this.config.color_button);
    document.documentElement.style.setProperty("--ltw-color-bundesland", this.config.color_bundesland);
    document.documentElement.style.setProperty("--ltw-color-termin", this.config.color_termin);
    document.documentElement.style.setProperty("--ltw-color-termin-selected", this.config.color_termin_selected);
  }

}

function toArray(value: any) {
  console.log("toArray INput", value)
  if (typeof value == 'string') {
    return value.split(";")
  }
  return [];
}