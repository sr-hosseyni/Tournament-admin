import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GroupEditorComponent} from './group-editor.component';
import {GroupRoutingModule} from './group-routing.module';
import {ReactiveFormsModule} from '@angular/forms';

import {PageHeaderModule} from '../../shared';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        PageHeaderModule,
        GroupRoutingModule
    ],
    declarations: [GroupEditorComponent]
})
export class GroupEditorModule {}
