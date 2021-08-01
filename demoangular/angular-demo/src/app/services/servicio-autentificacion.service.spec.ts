import { TestBed } from '@angular/core/testing';

import { ServicioAutentificacionService } from './servicio-autentificacion.service';

describe('ServicioAutentificacionService', () => {
  let service: ServicioAutentificacionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioAutentificacionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
