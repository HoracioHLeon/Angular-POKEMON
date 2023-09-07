import { TestBed } from '@angular/core/testing';

import { FavoritoServicesService } from './favorito-services.service';

describe('FavoritoServicesService', () => {
  let service: FavoritoServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FavoritoServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
