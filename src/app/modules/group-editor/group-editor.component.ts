import {Component, OnInit} from '@angular/core';
import {routerTransition} from '../../router.animations';
import {FormControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';

import {GroupService} from '../../services/http';
import {CurrentTournamentService} from '../../services/global/current-tournament.service';
import {Tournament} from '../../entities/tournament';
import {Group} from '../../entities/group';


@Component({
    selector: 'app-group-editor',
    templateUrl: './group-editor.component.html',
    styleUrls: ['./group-editor.component.scss'],
    animations: [routerTransition()]
})
export class GroupEditorComponent implements OnInit {
    public groupForm: FormGroup;
    private stageId: number;

    constructor(
        private fb: FormBuilder,
        private groupService: GroupService,
        private route: ActivatedRoute,
        private ct: CurrentTournamentService,
        private router: Router
    ) {}

    ngOnInit() {
        this.createForm();

        this.stageId = +this.route.snapshot.paramMap.get('stageId');
    }

    createForm() {
        this.groupForm = this.fb.group(new Group());
    }

    create() {
        this.groupService.create(this.stageId, this.groupForm.value)
            .subscribe(
                group => this.onSucceed(group)
            );
    }

    onSucceed(group: Group) {
        this.ct.tournament.getStage(this.stageId).groups.push(group);
        this.router.navigate(['matches', this.stageId]);
    }
}
