import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {StagesComponent} from './stages/stages.component';
import {MatchesComponent} from './matches/matches.component';

const routes: Routes = [
    {
        path: '',
        component: StagesComponent
    },
    {
        path: ':stageId',
        component: StagesComponent
    },
    {
        path: 'matches/:stageId/:groupId',
        component: MatchesComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MatchesRoutingModule {}
