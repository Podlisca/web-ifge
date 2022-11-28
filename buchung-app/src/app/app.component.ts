import { animate, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component, Input, ViewEncapsulation } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom,
  imports: [
     CommonModule
  ],
  animations: [
    trigger(
      'inOutAnimation',
      [
        transition(
          ':enter',
          [
            style({ height: 0, opacity: 1 }),
            animate('0.3s ease-out',
              style({ height: 1000, opacity: 1 }))
          ]
        ),
        transition(
          ':leave',
          [
            style({ height: 800, opacity: 1 }),
            animate('0.3s ease-in',
              style({ height: 0, opacity: 1 }))
          ]
        )
      ]
    )
  ]
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

  @Input() recaptchaSiteKey: string | undefined;

  @Input() title = "Kaufen";
  @Input() aufstellungen = false;
  @Input() expandable = true;

  expanded = false;
}
