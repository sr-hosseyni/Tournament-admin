import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ResultsRoutingModule} from './results-routing.module';
import {StandingsComponent} from './standings/standings.component';

@NgModule({
    imports: [
        CommonModule,
        ResultsRoutingModule
    ],
    declarations: [StandingsComponent]
})
export class ResultsModule {}
