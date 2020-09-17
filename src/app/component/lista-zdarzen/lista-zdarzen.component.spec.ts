import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaZdarzenComponent } from './lista-zdarzen.component';

describe('ListaZdarzenComponent', () => {
  let component: ListaZdarzenComponent;
  let fixture: ComponentFixture<ListaZdarzenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaZdarzenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaZdarzenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
