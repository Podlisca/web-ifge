import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { Observable, map } from 'rxjs';
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
  imports: [CommonModule, MatExpansionModule, KaufComponent, MatIconModule, TerminComponent, MatSlideToggleModule]
})
export class ProdukteComponent implements OnInit {

  maxProducts = 6;
  config = defaultConfig;

  @Input({ required: true }) query!: AnmeldeProduktQuery

  @Output() produktSelected = new EventEmitter<AnmeldeProdukt>();

  vm$?: Observable<View[][]>
  selection?: ProduktSelection;

  constructor(
    private service: AnmeldungService
  ) { }

  ngOnInit(): void {
    this.vm$ = this.service.getAnmeldeProdukte(this.query).pipe(
      map(arr => this.groupBy(arr, "ort")),
      map(byOrt => {
        // sort by reverse ort
        return Object.entries(byOrt).sort((a, b) => b[0].localeCompare(a[0])).map(([ort, arr]) => {
          const vm: View[] = [];
          const byName = arr.filter(p => this.query?.produktNamen?.includes(p.name!))
            .sort(this.compareByDate)
            .map(p => {
              const v: View = ({
                title: p.name!,
                produkte: [p],
                ort: ort
              });
              return v;
            });
          vm.push(...byName);

          this.query.vorlagenNamen?.forEach(vorlage => {
            const byVorlage = arr.filter(p => p.vorlage === vorlage).sort(this.compareByDate);
            if (byVorlage.length) {
              vm.push({
                title: vorlage,
                produkte: byVorlage,
                ort: ort
              });
            }
          });

          this.query.lehrplaene?.forEach(lp => {
            const byLehrplan = arr.filter(p => p.lehrplan === lp).sort(this.compareByDate);
            if (byLehrplan.length) {
              vm.push({
                title: lp,
                produkte: byLehrplan,
                ort: ort
              });
            }
          })
          return vm;
        });
      })
    );
  }

  onSelect(event: ProduktSelection) {
    // console.log("produkte select", event)
    this.selection = event;
    this.produktSelected.emit(event.produkt);
  }

  private groupBy(xs: any, key: string): { [key: string]: AnmeldeProdukt[] } {
    return xs.reduce(function (rv: any, x: any) {
      (rv[x[key]] = rv[x[key]] || []).push(x);
      return rv;
    }, {});
  }

  private compareByDate = (a: AnmeldeProdukt, b: AnmeldeProdukt) => {
    if (a.seminartage?.length == 0 || b.seminartage?.length == 0) {
      return 0;
    }
    return new Date(a.startdatum!).getTime() - new Date(b.startdatum!).getTime()
  }
}
