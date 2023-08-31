import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() name: string = '';
  @Input() start: string = '';
  @Input() function: string = '';
  @Input() src: string = '';
  @Input() alt: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
