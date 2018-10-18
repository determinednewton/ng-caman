import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CamanComponent } from './caman.component';

describe('CamanComponent', () => {
  let component: CamanComponent;
  let fixture: ComponentFixture<CamanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CamanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CamanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
