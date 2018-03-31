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
    }

    public allowDrop(ev: DragEvent) {
        ev.preventDefault();
    }

    drag(ev: DragEvent) {
        ev.dataTransfer.setData("text", ev.target.id);
    }

    drop(ev: DragEvent) {
        ev.preventDefault();

        this.stages[0].groups[0].teams.append('KIIIR');

        var data = ev.dataTransfer.getData("text");
        ev.target.appendChild(document.getElementById(data));
    }
}
