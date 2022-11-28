import { enableProdMode, importProvidersFrom } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { bootstrapApplication, createApplication } from '@angular/platform-browser';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';
import { AppComponent } from './app/app.component';

import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

if (!environment.production) {
  console.log("ltw development")
  // for development mode only
  bootstrapApplication(AppComponent, 
  //   {
  //   providers: provideAnimations()
  // }
  );
}
else {
  // get a hand on the `ApplicationRef` to access its injector
  createApplication({
    providers: [
      // provideAnimations()
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