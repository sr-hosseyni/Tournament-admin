import {Component, OnInit} from '@angular/core';
import {routerTransition} from '../../../router.animations';
import {FormControl, FormBuilder, FormGroup, Validators} from '@angular/forms';

import {TournamentService} from '../../../services/http/tournament.service';
import {Tournament} from '../../../entities/tournament';

@Component({
    selector: 'app-tournament-editor',
    templateUrl: './tournament-editor.component.html',
    styleUrls: ['./tournament-editor.component.scss'],
    animations: [routerTransition()]
})
export class TournamentEditorComponent implements OnInit {
    tournamentForm: FormGroup;

    constructor(
        private fb: FormBuilder,
        private ts: TournamentService
    ) {}

    ngOnInit() {
        this.createForm();
    }

    createForm() {
        this.tournamentForm = this.fb.group(new Tournament());

// @todo This line must be replaced by above line (but there is an error or maybe Bug in ta-json or angular5)
//        this.tournamentForm = this.fb.group({
//            name: '',
//            logo: '',
//            type: '',
//            platform: '',
//            isSingleStage: false,
//            stages: []
//        });
    }

    /**
     * I AM HERE
     */
    create() {
        console.log(this.tournamentForm.value);
        this.ts.create(this.tournamentForm.value).subscribe();
    }
}
