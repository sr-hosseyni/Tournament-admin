import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {HttpModule} from '@angular/http';

import {MatchesListComponent} from './matches-list.component';

import {MatchEditorModule} from '../match-editor/match-editor.module';
import {MatchModule} from '../match/match.module';
import {MatchRoutingModule} from './match-routing.module';

@NgModule({
    imports: [
        CommonModule,
        MatchEditorModule,
        MatchModule,
        NgbModule.forRoot(),
        HttpModule,
        MatchRoutingModule
    ],
    declarations: [
        MatchesListComponent
    ],
    exports: [
        MatchesListComponent
    ]
})
export class MatchesListModule {}
