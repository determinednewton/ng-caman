import { AfterViewInit, Component, ElementRef, Inject, InjectionToken, Input, OnInit, Optional, ViewChild } from '@angular/core';

type Caman = Function;
export const CAMAN_TOKEN = new InjectionToken<Caman>('caman');

// declare var Caman: any;

@Component({
  selector: 'app-caman',
  templateUrl: './caman.component.html',
  styleUrls: ['./caman.component.css'],
  providers: [{
    provide: CAMAN_TOKEN,
    useValue: window['Caman'],
  }]
})
export class CamanComponent implements OnInit, AfterViewInit {
  @Input() image: string;

  @ViewChild('canvas') canvasElementRef: ElementRef;

  constructor(@Optional() @Inject(CAMAN_TOKEN) private caman) {
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    console.log(this.canvasElementRef.nativeElement);
    this.caman(this.canvasElementRef.nativeElement, this.image, function () {
      this.render();
    });
  }
}
