import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { map, shareReplay } from 'rxjs';
import { AnmeldeProduktQuery, AnmeldungService } from '../+core/gen';
import { KaufComponent } from './kauf/kauf.component';


@Component({
  selector: 'app-produkte',
  standalone: true,
  templateUrl: './produkte.component.html',
  styleUrls: ['./produkte.component.css'],
  imports: [CommonModule, MatExpansionModule, KaufComponent]
})
export class ProdukteComponent implements OnInit {

  query: AnmeldeProduktQuery = {
    produktNamen: [
      "Eintagesaufstellung 6 Stunden",
      "Freischaltung Onlineakademie",
      "Infogespräch Upgrade",
      "LSB 17 Sonntag St. Pölten"],
    vorlagenNamen: []
  }

  produkte$ = this.service.getAnmeldeProdukte(this.query).pipe(shareReplay(1));
  singleday$ = this.produkte$.pipe(
    map(arr => arr.filter(p => !p.seminartage || p.seminartage?.length == 1))
  )
  multiday$ = this.produkte$.pipe(
    map(arr => arr.filter(p => p.seminartage && p.seminartage.length > 1))
  )

  constructor(
    private service: AnmeldungService
  ) { }

  ngOnInit(): void {
  }

}
