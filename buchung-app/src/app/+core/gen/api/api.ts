export * from './anmeldung.service';
import { AnmeldungService } from './anmeldung.service';
export * from './default.service';
import { DefaultService } from './default.service';
export const APIS = [AnmeldungService, DefaultService];
