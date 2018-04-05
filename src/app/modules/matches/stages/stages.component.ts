import {Component, OnInit} from '@angular/core';
import {routerTransition} from '../../../router.animations';

import {CurrentTournamentService} from '../../../services/global/current-tournament.service';
import {Stage} from '../../../entities/stage';

@Component({
    selector: 'app-stages',
    templateUrl: './stages.component.html',
    styleUrls: ['./stages.component.scss'],
    animations: [routerTransition()]
})
export class StagesComponent implements OnInit {
    private stages: Stage[];

    constructor(private currentTournament: CurrentTournamentService) {}

    ngOnInit() {
        this.stages = this.currentTournament.tournament.stages;
        console.log(this.stages[1].teams);
    }
}
