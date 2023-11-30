import { Component, ElementRef, EventEmitter, Inject, Input, OnInit, Output, Renderer2, ViewChild } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';

const RECAPTCHA_API = 'https://www.google.com/recaptcha/api.js';
declare let grecaptcha: any;

@Component({
  selector: 'app-anmeldung',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './anmeldung.component.html',
  styleUrls: ['./anmeldung.component.css']
})
export class AnmeldungComponent {

  @Input() recaptchaSiteKey: string | undefined = "6Lce7dYZAAAAAH25vMIzl-FWL4vgYmyMC9Fhhoj8";
  @Input() expandable: boolean = true;
  @Input() text = "Kaufen";
  @Input() veranstaltungen: string[] = []
  @Input() veranstaltungSelected: string = ""
  @Input() aufstellungen: boolean = false;
  @Output('submit') anmeldung = new EventEmitter<void>();

  @ViewChild('cform') form!: ElementRef
  @ViewChild('recaptchaResponse') recaptchaResponseField!: ElementRef

  expanded = true;
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
            // emit callback hook
            this.anmeldung.emit();

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
