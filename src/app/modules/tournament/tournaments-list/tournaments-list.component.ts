import {Component, OnInit} from '@angular/core';
import {routerTransition} from '../../../router.animations';

import {TournamentService} from '../../../services/http/tournament.service';
import {Tournament} from '../../../entities/tournament';


@Component({
    selector: 'app-tournaments-list',
    templateUrl: './tournaments-list.component.html',
    styleUrls: ['./tournaments-list.component.scss'],
    animations: [routerTransition()],
})
export class TournamentsListComponent implements OnInit {
    // mode = 'Observable';
    tournaments: Tournament[];

    constructor(private tournamentService: TournamentService) {

    }

    ngOnInit() {
        this.tournamentService.getTournaments()
            .subscribe(
                tournaments => this.tournaments = tournaments
//                error => this.errorMessage(error)
            );
    }

    errorMessage(error: string) {}
}
