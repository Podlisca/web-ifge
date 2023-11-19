import { DEFAULT_CURRENCY_CODE, LOCALE_ID, enableProdMode } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { bootstrapApplication, createApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import de from "@angular/common/locales/de";
import { provideHttpClient } from '@angular/common/http';
import { environment } from './environments/environment';
import { provideAnimations } from '@angular/platform-browser/animations';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { registerLocaleData } from '@angular/common';

if (environment.production) {
  enableProdMode();
}

registerLocaleData(de, "de");

if (!environment.production) {
  console.log("ltw development")
  // for development mode only
  bootstrapApplication(AppComponent,
    {
      providers: [
        provideHttpClient(),
        provideAnimations(),
        { provide: DEFAULT_CURRENCY_CODE, useValue: "EUR" },
        { provide: LOCALE_ID, useValue: "de" },
        { provide: MAT_DATE_LOCALE, useValue: 'de-DE' },
      ]
    }
  );
}
else {
  // get a hand on the `ApplicationRef` to access its injector
  createApplication({
    providers: [
      provideHttpClient(),
      provideAnimations(),
      { provide: DEFAULT_CURRENCY_CODE, useValue: "EUR" },
    ]
  }).then((appRef) => {
    // create a constructor of a custom element
    const buchung = createCustomElement(
      AppComponent, // component for Angular element
      { injector: appRef.injector } // used to inject the component to the DOM
    );

    // register in a browser
    customElements.define('ifge-buchung', buchung);
  });
}