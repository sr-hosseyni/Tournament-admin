import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {TournamentsListComponent} from './tournaments-list/tournaments-list.component';
import {TournamentEditorComponent} from './tournament-editor/tournament-editor.component';

const routes: Routes = [
    {
        path: '',
        component: TournamentsListComponent
    },
    {
        path: 'create',
        component: TournamentEditorComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TournamentRoutingModule {}
