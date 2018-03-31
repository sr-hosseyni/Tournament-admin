import {Component, OnInit, Input} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {NgbAccordion} from '@ng-bootstrap/ng-bootstrap';

// import {Stage} from '../../../../entities/stage';
import {Enums} from '../../../../entities/enums/enums';

@Component({
    selector: 'app-tournament-structure',
    templateUrl: './tournament-structure.component.html',
    styleUrls: ['./tournament-structure.component.scss']
})
export class TournamentStructureComponent implements OnInit {
    @Input() tournamentForm: FormGroup;
    Enums = Enums;
    constructor() {}

    ngOnInit() {
        console.log(this.tournamentForm);
//        this.tournamentForm.addControl('stages');
    }

    isSingleStage() {
        return this.tournamentForm.get('isSingleStage').value;
    }

    setSingleStage() {
        this.tournamentForm.patchValue({isSingleStage: true});
//        this.tournamentForm.value.stages = [{
//            homeAndAway: false,
////            type: Enums.StageType.LEAGUE,
//            type: 1,
//
//        }];
    }

    setMultiStage() {
        this.tournamentForm.patchValue({isSingleStage: false});
    }
}
