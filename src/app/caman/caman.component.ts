import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-caman',
  templateUrl: './caman.component.html',
  styleUrls: ['./caman.component.css']
})
export class CamanComponent implements OnInit {
  @Input() image: string;

  @ViewChild('canvas') canvasElementRef: ElementRef;

  constructor() { }

  ngOnInit() {
  }

}
