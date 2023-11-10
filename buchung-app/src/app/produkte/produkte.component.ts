import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AnmeldungService } from '../+core/gen';


@Component({
  selector: 'app-produkte',
  standalone: true,
  templateUrl: './produkte.component.html',
  styleUrls: ['./produkte.component.css'],
  imports: [CommonModule]
})
export class ProdukteComponent implements OnInit {

  produkte$ = this.service.getAnmeldeProdukte();

  constructor(
    private service: AnmeldungService
  ) { }

  ngOnInit(): void {
  }

}
