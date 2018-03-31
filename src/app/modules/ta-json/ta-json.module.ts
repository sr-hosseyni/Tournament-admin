import { NgModule } from '@angular/core';
import {ModuleWithProviders} from '@angular/core';
export * from 'ta-json';

export declare class TaJsonRootModule {
}

@NgModule({
  imports: [],
  declarations: []
})
export class TaJsonModule {
    public static forRoot(): ModuleWithProviders {
        return {ngModule: TaJsonModule, providers: []};
    }
}

