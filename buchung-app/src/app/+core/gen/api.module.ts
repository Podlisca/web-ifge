import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { Configuration } from './configuration';
import { HttpClient } from '@angular/common/http';

import { AnmeldungService } from './api/anmeldung.service';
import { BuchhaltungService } from './api/buchhaltung.service';
import { DefaultService } from './api/default.service';
import { FakturierungService } from './api/fakturierung.service';
import { PlanungService } from './api/planung.service';
import { PruefungService } from './api/pruefung.service';
import { ReferentService } from './api/referent.service';
import { SchuelerService } from './api/schueler.service';
import { TerminService } from './api/termin.service';
import { UebungService } from './api/uebung.service';
import { WebexService } from './api/webex.service';

@NgModule({
  imports:      [],
  declarations: [],
  exports:      [],
  providers: []
})
export class ApiModule {
    public static forRoot(configurationFactory: () => Configuration): ModuleWithProviders<ApiModule> {
        return {
            ngModule: ApiModule,
            providers: [ { provide: Configuration, useFactory: configurationFactory } ]
        };
    }

    constructor( @Optional() @SkipSelf() parentModule: ApiModule,
                 @Optional() http: HttpClient) {
        if (parentModule) {
            throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
        }
        if (!http) {
            throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
            'See also https://github.com/angular/angular/issues/20575');
        }
    }
}
