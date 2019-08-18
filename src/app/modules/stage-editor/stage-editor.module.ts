import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StageEditorComponent} from './stage-editor.component';
import {StageRoutingModule} from './stage-routing.module';
import {ReactiveFormsModule} from '@angular/forms';

import {PageHeaderModule} from '../../shared';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        PageHeaderModule,
        StageRoutingModule
    ],
    declarations: [StageEditorComponent]
})
export class StageEditorModule {}
