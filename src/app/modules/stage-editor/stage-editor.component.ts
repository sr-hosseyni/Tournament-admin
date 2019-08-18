import {Component, OnInit} from '@angular/core';
import {routerTransition} from '../../router.animations';
import {FormControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';

import {StageService} from '../../services/http';
import {CurrentTournamentService} from '../../services/global/current-tournament.service';
import {Tournament} from '../../entities/tournament';
import {Stage} from '../../entities/stage';

@Component({
    selector: 'app-stage-editor',
    templateUrl: './stage-editor.component.html',
    styleUrls: ['./stage-editor.component.scss'],
    animations: [routerTransition()]
})
export class StageEditorComponent implements OnInit {
    public stageForm: FormGroup;
    private tournamentId: number;

    constructor(
        private fb: FormBuilder,
        private stageService: StageService,
        private route: ActivatedRoute,
        private router: Router,
        private ct: CurrentTournamentService
    ) {}

    ngOnInit() {
        this.createForm();

        if (this.route.snapshot.paramMap.has('tournamentId')) {
            this.tournamentId = +this.route.snapshot.paramMap.get('tournamentId');
        } else {
            this.tournamentId = this.ct.tournament.id;
        }
    }

    createForm() {
        this.stageForm = this.fb.group(new Stage());
    }

    create() {
        let x = this.stageService.create(this.tournamentId, this.stageForm.value)
            .subscribe(
                stage => this.onSucceed(stage),
            );
    }

    onSucceed(stage: Stage) {
        if (this.ct.tournament.id = this.tournamentId) {
            this.ct.tournament.stages.push(Object.assign(new Stage(), stage));
        }

        this.router.navigate(['matches', stage.id]);
    }
}
