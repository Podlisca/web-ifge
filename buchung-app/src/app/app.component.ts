import { BooleanInput, coerceBooleanProperty } from '@angular/cdk/coercion';
import { CommonModule, DOCUMENT } from '@angular/common';
import { AfterViewInit, Component, ElementRef, Inject, Input, Renderer2, ViewChild, ViewEncapsulation } from '@angular/core';

const RECAPTCHA_API = 'https://www.google.com/recaptcha/api.js';
declare let grecaptcha: any;

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom,
  imports: [
    CommonModule
  ],
})
export class AppComponent implements AfterViewInit {

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

  expanded = false;

  @ViewChild('cform') form!: ElementRef
  @ViewChild('recaptchaResponse') recaptchaResponseField!: ElementRef

  recaptchaResponse: string = "";

  constructor(
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document) {
  }

  ngAfterViewInit(): void {
    const scriptElement = this.loadJsScript(this.renderer, RECAPTCHA_API + "?render=" + this.recaptchaSiteKey);
    scriptElement.onload = () => {

      this.form.nativeElement.addEventListener('submit', (event: any) => {
        event.preventDefault();
        grecaptcha.ready(() => {
          grecaptcha.execute(this.recaptchaSiteKey, { action: 'submit' }).then((token: any) => {
            this.recaptchaResponseField.nativeElement.value = token;
            this.form.nativeElement.submit();
          });
        });
      });

    }
    scriptElement.onerror = () => {
      console.log('Could not load the Google API Script!');
    }
  }

  private loadJsScript(renderer: Renderer2, src: string): HTMLScriptElement {
    const script = renderer.createElement('script');
    script.type = 'text/javascript';
    script.src = src;
    renderer.appendChild(this.document.body, script);
    return script;
  }

}
