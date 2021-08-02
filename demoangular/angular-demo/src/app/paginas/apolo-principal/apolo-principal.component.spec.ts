import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApoloPrincipalComponent } from './apolo-principal.component';

describe('ApoloPrincipalComponent', () => {
  let component: ApoloPrincipalComponent;
  let fixture: ComponentFixture<ApoloPrincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApoloPrincipalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApoloPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
