import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {StageEditorComponent} from './stage-editor.component';

const routes: Routes = [
    {
        path: ':tournamentId',
        component: StageEditorComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class StageRoutingModule {}
