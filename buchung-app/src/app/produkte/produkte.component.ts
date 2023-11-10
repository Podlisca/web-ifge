import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { AnmeldungService } from '../+core/gen';
import { of } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-produkte',
  standalone: true,
  templateUrl: './produkte.component.html',
  styleUrls: ['./produkte.component.css'],
  imports: [CommonModule]
})
export class ProdukteComponent implements OnInit {

  httpClient = inject(HttpClient)
  produkte$ = this.service.getAnmeldeProdukte();

  constructor(
    private service: AnmeldungService
  ) { }

  ngOnInit(): void {
    console.log(this.httpClient.get(""))
  }

}
