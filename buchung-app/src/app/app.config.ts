import { environment } from "src/environments/environment";

export interface LwrConfig {
    'color_hintergrund': string,
    'color_bundesland': string,
    'color_termin': string,
    'color_termin_selected': string,
    'color_button': string,
    'produkte': string[],
    'url_success': string,
    'url_dsgvo': string,
    'api': string,
}

export enum LwrBookingEvent {
    selectTermin = "onSelectTermin",
    continue = "onContinue",
    success = "onSuccess",
}

// default ifge config
export const defaultConfig: LwrConfig = {
    color_hintergrund: "#fcf5ee",
    color_bundesland: "#a34d5d",
    color_termin: "rgba(255,255,255,0.65)",
    color_termin_selected: "#16978c69",
    color_button: "#a34d5d",
    url_dsgvo: environment.url_dsgvo,
    url_success: environment.url_success,
    produkte: [],
    api: environment.api
};

export interface InfoTermin {
    id: number;
    name: string;
    datum: string;
    startzeit: string;
    endzeit: string;
    isVormittag: boolean;
    freiePlaetze: number;
  }
  
  export interface Anmeldung {
    id: number;
    datum: string;
    anrede: string;
    vorname: string;
    nachname: string;
    email: string;
    tel: string;
    strasse: string;
    nr: string;
    plz: string;
    ort: string;
  }
  
  export enum orte {
    WIEN = "Wien",
    BURGENLAND = "Burgenland",
    NOE = "Niederösterreich",
    ONLINE = "Online"
  }