import { enableProdMode } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { createApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';

import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

// get a hand on the `ApplicationRef` to access its injector
createApplication({ providers: [] }).then((appRef) => {
  // create a constructor of a custom element
  const buchung = createCustomElement(
    AppComponent, // component for Angular element
    { injector: appRef.injector } // used to inject the component to the DOM
  );

  // register in a browser
  customElements.define('ifge-buchung', buchung);
});