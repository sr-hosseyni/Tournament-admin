import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {CurrentTournamentService} from '../../../services/global/current-tournament.service';
import {GeneratorService} from '../../../services/http/generator.service';
import {Group, Match} from '../../../entities/';

@Component({
    selector: 'app-matches',
    templateUrl: './matches.component.html',
    styleUrls: ['./matches.component.scss']
})
export class MatchesComponent implements OnInit {
    group: Group;
    matches: Match[];

    constructor(
        private route: ActivatedRoute,
        private ctour: CurrentTournamentService,
        private generator: GeneratorService
    ) {}

    ngOnInit() {
        let stageId = +this.route.snapshot.paramMap.get('stageId');
        let groupId = +this.route.snapshot.paramMap.get('groupId');
        for (let stage of this.ctour.tournament.stages) {
            if (stage.id == stageId) {
                for (let group of stage.groups) {
                    if (group.id == groupId) {
                        this.group = group;
                        break;
                    }
                }
                break;
            }
        }
    }

    generateMatches() {
        this.generator.generateMatches(this.group.id)
            .subscribe(
                matches => this.matches = matches
//                error => this.errorMessage(error)
            );

        let x = new Match();
        x.teams
    }
}
