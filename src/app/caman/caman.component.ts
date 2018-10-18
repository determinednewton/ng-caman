import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

declare var Caman: any;

@Component({
  selector: 'app-caman',
  templateUrl: './caman.component.html',
  styleUrls: ['./caman.component.css']
})
export class CamanComponent implements OnInit, AfterViewInit {
  @Input() image: string;

  @ViewChild('canvas') canvasElementRef: ElementRef;

  constructor() {
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    console.log(this.canvasElementRef.nativeElement);
    Caman(this.canvasElementRef.nativeElement, this.image, function () {
      this.render();
    });
  }
}
