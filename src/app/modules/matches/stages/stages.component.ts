import {Component, OnInit, ViewChild} from '@angular/core';
import {routerTransition} from '../../../router.animations';
import {ActivatedRoute} from '@angular/router';
//import {NgbTabset} from '@ng-bootstrap/ng-bootstrap';

import {CurrentTournamentService} from '../../../services/global/current-tournament.service';
import {Group, Stage, Team} from '../../../entities/';
import {GroupService} from '../../../services/http/group.service';

@Component({
    selector: 'app-stages',
    templateUrl: './stages.component.html',
    styleUrls: ['./stages.component.scss'],
    animations: [routerTransition()]
})
export class StagesComponent implements OnInit {
    private stages: Stage[];
    private selectedStageId: number;
//    @ViewChild('t') ngbTabset: NgbTabset;

    constructor(
        private currentTournament: CurrentTournamentService,
        private groupService: GroupService,
        private route: ActivatedRoute
    ) {}

    ngOnInit() {
        this.stages = this.currentTournament.tournament.stages;
        if (this.route.snapshot.paramMap.has('stageId')) {
            this.selectedStageId = +this.route.snapshot.paramMap.get('stageId');
        }
    }

    removeTeamFromGroup(e: any, stage : Stage, group: Group) {
        console.log('e, group');
    }

    addTeamToGroup(e: any, stage : Stage, group: Group) {
        this.groupService.addTeam(group, e.value)
            .subscribe(
                group => this.updateGroup(stage, group),
                err => this.removeTeam(group, e.value),
                () => console.log('fuck')
            );
    }

    updateGroup(stage : Stage, newGroup) {
        stage.groups.forEach(function(group : Group, index) {
            if (group.id == newGroup.id) {
                stage.groups[index] = newGroup;
            }
        });
    }

    removeTeam(group : Group, remTeam) {
        group.teams.forEach(function(team : Team, index){
            if (team.id == remTeam.id) {
                group.teams.splice(index, 1);
            }
        });
    }
}
