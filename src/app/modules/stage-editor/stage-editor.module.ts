import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StageEditorComponent} from './stage-editor.component';
import {StageRoutingModule} from './stage-routing.module';

@NgModule({
    imports: [
        CommonModule,
        StageRoutingModule
    ],
    declarations: [StageEditorComponent]
})
export class StageEditorModule {}
