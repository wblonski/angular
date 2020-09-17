import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZdarzenieComponent } from './zdarzenie.component';

describe('ZdarzeniaComponent', () => {
  let component: ZdarzenieComponent;
  let fixture: ComponentFixture<ZdarzenieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZdarzenieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZdarzenieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
