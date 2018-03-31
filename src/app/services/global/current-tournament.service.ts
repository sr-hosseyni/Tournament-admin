import {Injectable} from '@angular/core';

import {TournamentService} from '../http/tournament.service';
import {Tournament} from '../../entities/tournament';

@Injectable()
export class CurrentTournamentService {
    private _tournament: Tournament = null;

    constructor(private httpTournament: TournamentService) {}

    set tournament(tournament: Tournament) {
        this._tournament = tournament;
    }

    get tournament(): Tournament {
        if (this._tournament === null) {
            this.httpTournament.getTournament(1)
                .subscribe(tournament => this._tournament = tournament);
            this._tournament = new Tournament();
        }

        return this._tournament;
    }
}
