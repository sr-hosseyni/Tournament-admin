import { TestBed, inject } from '@angular/core/testing';

import { CurrentTournamentService } from './current-tournament.service';

describe('CurrentTournamentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CurrentTournamentService]
    });
  });

  it('should be created', inject([CurrentTournamentService], (service: CurrentTournamentService) => {
    expect(service).toBeTruthy();
  }));
});
