import {Component, OnInit} from '@angular/core';

import {StandingService} from '../../../services/http';

@Component({
    selector: 'app-standings',
    templateUrl: './standings.component.html',
    styleUrls: ['./standings.component.scss']
})
export class StandingsComponent implements OnInit {
    standings: Object[];

    constructor(
        private standingService: StandingService
    ) {}

    ngOnInit() {
        this.standingService.getSummary(2)
            .subscribe(
                standing => this.standings = standing
            );
    }

}
