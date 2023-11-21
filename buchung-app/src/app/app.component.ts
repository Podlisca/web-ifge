import { BooleanInput, coerceBooleanProperty } from '@angular/cdk/coercion';
import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { AnmeldungComponent } from './anmeldung/anmeldung.component';
import { LwrBookingEvent, defaultConfig } from './app.config';
import { ProdukteComponent } from './produkte/produkte.component';


@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // encapsulation: ViewEncapsulation.ShadowDom,
  imports: [
    CommonModule,
    AnmeldungComponent,
    ProdukteComponent,
    MatButtonModule
  ],
})
export class AppComponent {

  config = defaultConfig;

  _veranstaltungen: string[] = [];
  @Input() set veranstaltungen(val: string) {
    this._veranstaltungen = val.split(";");
  }

  _veranstaltungSelected: string | undefined;
  @Input() set veranstaltung(val: string) {
    this._veranstaltungSelected = val;
  }

  @Input() recaptchaSiteKey: string | undefined = "6Lce7dYZAAAAAH25vMIzl-FWL4vgYmyMC9Fhhoj8";

  @Input() text = "Kaufen";

  @Output('submit') anmeldung = new EventEmitter<void>();

  private _aufstellungen = false;
  get aufstellungen() { return this._aufstellungen; }
  @Input() set aufstellungen(value: BooleanInput) {
    this._aufstellungen = coerceBooleanProperty(value);
  };

  private _expandable = true;
  get expandable() { return this._expandable; }
  @Input() set expandable(value: BooleanInput) {
    this._expandable = coerceBooleanProperty(value);
  }

  private continueListener?: (t: any) => {};
  private terminSelectListener?: (t: any) => {};
  private successListener?: (t: any) => {};

  step = 0;

  constructor() {
    this.configure();
  }

  next() {
    this.step++;
    if (this.continueListener) {
      // this.continueListener(this.termin);
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
