import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { map } from 'rxjs';
import { AnmeldeProdukt, AnmeldeProduktQuery, AnmeldungService } from '../+core/gen';
import { KaufComponent } from './kauf/kauf.component';
import { defaultConfig } from '../app.config';
import { lehrplaene } from '../+core/data/lehrplaene';
import { TerminComponent } from './termin/termin.component';

interface View {
  ort: string,
  title: string,
  produkte: AnmeldeProdukt[]
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
      "Eintagesaufstellung 6 Stunden",
      "Freischaltung Onlineakademie",
      "Infogespräch Upgrade",
      "LSB 17 Sonntag St. Pölten"],
    vorlagenNamen: [],
    lehrplaene: lehrplaene
  }

  @Output() produktSelected = new EventEmitter<AnmeldeProdukt>();

  vm$ = this.service.getAnmeldeProdukte(this.query).pipe(
    map(arr => {
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

      return this.groupBy(vm, "ort");
    })
  )

  constructor(
    private service: AnmeldungService
  ) { }

  ngOnInit(): void {
  }

  onSelect(event: AnmeldeProdukt) {
    this.selection = event.id;
    this.produktSelected.emit(event);
  }

  private groupBy(xs: any, key: string): { [key: string]: View[] } {
    return xs.reduce(function (rv: any, x: any) {
      (rv[x[key]] = rv[x[key]] || []).push(x);
      return rv;
    }, {});
  }
}
