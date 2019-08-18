import {Injectable} from '@angular/core';

import {TournamentService} from '../http/tournament.service';
import {Tournament} from '../../entities/tournament';

@Injectable()
export class CurrentTournamentService {
    private _tournament: Tournament = null;
    private static localStorageKey = 'current-tournament';

    constructor(private httpTournament: TournamentService) {}

    set tournament(tournament: Tournament) {
        localStorage.setItem(CurrentTournamentService.localStorageKey, JSON.stringify(tournament));
        this._tournament = tournament;
    }

    get tournament(): Tournament {
        if (this._tournament === null) {
            let strTournament = localStorage.getItem(CurrentTournamentService.localStorageKey);
            if (strTournament) {
                this.tournament = Object.assign(new Tournament(), JSON.parse(strTournament));
            } else {
                this._tournament = new Tournament();
            }

            this.httpTournament.getTournament(1)
                .subscribe(tournament => this.tournament = Object.assign(new Tournament(), tournament));
        }

        return this._tournament;
    }
}
