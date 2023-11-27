import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { map } from 'rxjs';
import { AnmeldeProdukt, AnmeldeProduktQuery, AnmeldungService } from '../+core/gen';
import { defaultConfig } from '../app.config';
import { KaufComponent } from './kauf/kauf.component';
import { TerminComponent } from './termin/termin.component';

interface View {
  ort: string,
  title: string,
  produkte: AnmeldeProdukt[]
}

export interface ProduktSelection {
  produkt: AnmeldeProdukt
  index: number
}

@Component({
  selector: 'app-produkte',
  standalone: true,
  templateUrl: './produkte.component.html',
  styleUrls: ['./produkte.component.css'],
  imports: [CommonModule, MatExpansionModule, KaufComponent, MatIconModule, TerminComponent]
})
export class ProdukteComponent implements OnInit {

  config = defaultConfig;

  selection?: number;

  query: AnmeldeProduktQuery = {
    produktNamen: [
      // "Eintagesaufstellung 6 Stunden",
      // "Freischaltung Onlineakademie",
      // "Tiercoaching: Intensivtraining in Pinkafeld 2024",
      // "LSB 17 Sonntag St. Pölten"],
    ],
    vorlagenNamen: [
      "Familienaufstellung Eintages Seminar"
    ],
    lehrplaene: []
  }

  @Output() produktSelected = new EventEmitter<AnmeldeProdukt>();

  vm$ = this.service.getAnmeldeProdukte(this.query).pipe(
    map(arr => this.groupBy(arr, "ort")),
    map(byOrt => {
      return Object.entries(byOrt).map(([ort, arr]) => {
        const vm: View[] = [];
        const byName = arr.filter(p => this.query.produktNamen?.includes(p.name!))
          .map(p => {
            const v: View = ({
              title: p.name!,
              produkte: [p],
              ort: p.ort ?? "Produkt"
            });
            return v;
          });
        vm.push(...byName);

        this.query.vorlagenNamen?.forEach(vorlage => {
          const byVorlage = arr.filter(p => p.vorlage === vorlage);
          if (byVorlage.length) {
            vm.push({
              title: vorlage,
              produkte: byVorlage,
              ort: byVorlage[0].ort ?? "Produkttyp"
            });
          }
        });

        this.query.lehrplaene?.forEach(lp => {
          const byLehrplan = arr.filter(p => p.lehrplan === lp);
          if (byLehrplan.length) {
            vm.push({
              title: lp,
              produkte: byLehrplan,
              ort: byLehrplan[0].ort ?? "Lehrplan"
            });
          }
        })
        return vm;
      });
    })
  )

  constructor(
    private service: AnmeldungService
  ) { }

  ngOnInit(): void {
  }

  // onSelect(event: AnmeldeProdukt) {
  //   this.selection = event.id;
  //   this.produktSelected.emit(event);
  // }

  onSelect(event: ProduktSelection) {
    this.selection = event.index;
    this.produktSelected.emit(event.produkt);
  }

  private groupBy(xs: any, key: string): { [key: string]: AnmeldeProdukt[] } {
    return xs.reduce(function (rv: any, x: any) {
      (rv[x[key]] = rv[x[key]] || []).push(x);
      return rv;
    }, {});
  }
}
