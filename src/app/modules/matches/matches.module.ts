import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {TranslateModule} from '@ngx-translate/core';

import {PageHeaderModule} from '../../shared';
import {StagesComponent} from './stages/stages.component';
import {MatchesRoutingModule} from './matches-routing.module';

@NgModule({
    imports: [
        CommonModule,
        PageHeaderModule,
        TranslateModule,
        NgbModule.forRoot(),
        MatchesRoutingModule
    ],
    declarations: [StagesComponent]
})
export class MatchesModule {}
