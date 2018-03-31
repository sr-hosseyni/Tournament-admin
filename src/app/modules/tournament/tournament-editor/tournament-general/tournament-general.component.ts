import {Component, OnInit, Input} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
    selector: 'app-tournament-general',
    templateUrl: './tournament-general.component.html',
    styleUrls: ['./tournament-general.component.scss']
})
export class TournamentGeneralComponent implements OnInit {
    @Input() tournamentForm: FormGroup;

    // temporary
    condition = false;


    constructor() {}

    ngOnInit() {
        console.log(this.tournamentForm);
    }
}
