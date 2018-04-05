import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StageEditorComponent} from './stage-editor.component';
import {StageRoutingModule} from './stage-routing.module';
import {NgxDnDModule} from '@swimlane/ngx-dnd';

@NgModule({
    imports: [
        CommonModule,
        NgxDnDModule,
        StageRoutingModule
    ],
    declarations: [StageEditorComponent]
})
export class StageEditorModule {}
