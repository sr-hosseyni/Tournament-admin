import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {GroupEditorComponent} from './group-editor.component';

const routes: Routes = [
    {
        path: ':stageId',
        component: GroupEditorComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class GroupRoutingModule {}
