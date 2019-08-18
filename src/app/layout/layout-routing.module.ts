import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'dashboard' },
            { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
            { path: 'charts', loadChildren: './charts/charts.module#ChartsModule' },
            { path: 'tables', loadChildren: './tables/tables.module#TablesModule' },
            { path: 'forms', loadChildren: './form/form.module#FormModule' },
            { path: 'bs-element', loadChildren: './bs-element/bs-element.module#BsElementModule' },
            { path: 'grid', loadChildren: './grid/grid.module#GridModule' },
            { path: 'components', loadChildren: './bs-component/bs-component.module#BsComponentModule' },
            { path: 'blank-page', loadChildren: './blank-page/blank-page.module#BlankPageModule' },
            { path: 'tournaments', loadChildren: '../modules/tournament/tournament.module#TournamentModule' },
            { path: 'matches-result', loadChildren: '../modules/match/matches-list/matches-list.module#MatchesListModule' },
            { path: 'matches', loadChildren: '../modules/matches/matches.module#MatchesModule' },
            { path: 'stage', loadChildren: '../modules/stage-editor/stage-editor.module#StageEditorModule' },
            { path: 'group', loadChildren: '../modules/group-editor/group-editor.module#GroupEditorModule' },
            { path: 'results', loadChildren: '../modules/results/results.module#ResultsModule' }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}
