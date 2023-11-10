import { BooleanInput, coerceBooleanProperty } from '@angular/cdk/coercion';
import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { AnmeldungComponent } from './anmeldung/anmeldung.component';
import { ProdukteComponent } from './produkte/produkte.component';


@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom,
  imports: [
    CommonModule,
    AnmeldungComponent,
    ProdukteComponent,
  ],
})
export class AppComponent {

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

}
