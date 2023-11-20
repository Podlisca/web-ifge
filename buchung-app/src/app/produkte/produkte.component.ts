import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { map } from 'rxjs';
import { AnmeldeProdukt, AnmeldeProduktQuery, AnmeldungService } from '../+core/gen';
import { KaufComponent } from './kauf/kauf.component';
import { config } from '../app.config';
import { lehrplaene } from '../+core/data/lehrplaene';
import { TerminComponent } from './termin/termin.component';

interface View {
  title: string,
  ort: string,
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

  config = config;

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

  // produkte$ = this.service.getAnmeldeProdukte(this.query).pipe(shareReplay(1));
  // singleday$ = this.produkte$.pipe(
  //   map(arr => arr.filter(p => !p.seminartage || p.seminartage?.length == 1))
  // )
  // multiday$ = this.produkte$.pipe(
  //   map(arr => arr.filter(p => p.seminartage && p.seminartage.length > 1))
  // )

  vm$ = this.service.getAnmeldeProdukte(this.query).pipe(
    map(arr => {
      const vm: View[] = [];
      const byName = arr.filter(p => this.query.produktNamen?.includes(p.name!))
        .map(p => {
          const v: View = ({
            title: p.name!,
            produkte: [p],
            ort: "Ortname"
          });
          return v;
        });
      vm.push(...byName);

      this.query.vorlagenNamen?.forEach(vorlage => {
        const byVorlage = arr.filter(p => p.vorlage == vorlage);
        vm.push({
          title: vorlage,
          produkte: byVorlage,
          ort: "Online"
        });
      });

      this.query.lehrplaene?.forEach(lp => {
        const byLehrplan = arr.filter(p => !!p.lehrplan);
        vm.push({
          title: lp,
          produkte: byLehrplan,
          ort: "Wien"
        });
      })

      return vm;
    })
  )

  constructor(
    private service: AnmeldungService
  ) { }

  ngOnInit(): void {
  }

  onSelect(event: any) {

  }
}
