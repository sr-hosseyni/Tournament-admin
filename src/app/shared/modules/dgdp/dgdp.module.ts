import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {DraggableDirective, DroppableDirective, DragHandleDirective} from './directives';
import {ContainerComponent, ItemComponent} from './components';
import {DrakeStoreService} from './services';

const components = [ContainerComponent, ItemComponent];
const directives = [DraggableDirective, DroppableDirective, DragHandleDirective];

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        ...components,
        ...directives
    ],
    exports: [
        ...components,
        ...directives
    ],
    providers: [DrakeStoreService]
})
export class DgdpModule {}
