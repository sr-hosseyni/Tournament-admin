import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {TranslateModule} from '@ngx-translate/core';
//import {NgxDnDModule} from '@swimlane/ngx-dnd';
import {DgdpModule} from '../../shared/modules/dgdp/';

import {PageHeaderModule} from '../../shared';
import {StagesComponent} from './stages/stages.component';
import {MatchesRoutingModule} from './matches-routing.module';
import { MatchesComponent } from './matches/matches.component';

@NgModule({
    imports: [
        CommonModule,
        PageHeaderModule,
        TranslateModule,
        NgbModule.forRoot(),
        DgdpModule,
        MatchesRoutingModule
    ],
    declarations: [StagesComponent, MatchesComponent]
})
export class MatchesModule {}
