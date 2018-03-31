import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {TranslateModule} from '@ngx-translate/core';
import {ReactiveFormsModule} from '@angular/forms';

import {PageHeaderModule} from '../../shared';
import {TournamentRoutingModule} from './tournament-routing.module';
import {TournamentEditorComponent} from './tournament-editor/tournament-editor.component';
import {TournamentsListComponent} from './tournaments-list/tournaments-list.component';
import {TournamentGeneralComponent} from './tournament-editor/tournament-general/tournament-general.component';
import {TournamentStructureComponent} from './tournament-editor/tournament-structure/tournament-structure.component';

@NgModule({
  imports: [
    CommonModule,
    PageHeaderModule,
    NgbModule.forRoot(),
    TranslateModule,
    ReactiveFormsModule,
    TournamentRoutingModule
  ],
  declarations: [
    TournamentsListComponent,
    TournamentEditorComponent,
    TournamentGeneralComponent,
    TournamentStructureComponent,
  ],
  providers: [
  ]
})
export class TournamentModule {}
