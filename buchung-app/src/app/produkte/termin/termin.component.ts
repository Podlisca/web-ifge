import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { AnmeldeProdukt } from 'src/app/+core/gen';


@Component({
  selector: 'app-termin',
  standalone: true,
  templateUrl: './termin.component.html',
  styleUrls: ['./termin.component.css'],
  imports: [CommonModule, MatIconModule]
})
export class TerminComponent implements OnInit {

  @Input() termin!: AnmeldeProdukt;

  @Output() onSelect = new EventEmitter<AnmeldeProdukt>();

  constructor() { }

  ngOnInit(): void {
  }

  select() {
    this.onSelect.emit(this.termin);
  }

}
