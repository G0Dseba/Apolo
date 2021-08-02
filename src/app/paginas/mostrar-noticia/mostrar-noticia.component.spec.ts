import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarNoticiaComponent } from './mostrar-noticia.component';

describe('AgregarNoticiaComponent', () => {
  let component: MostrarNoticiaComponent;
  let fixture: ComponentFixture<MostrarNoticiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostrarNoticiaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MostrarNoticiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
