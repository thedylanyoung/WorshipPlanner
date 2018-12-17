import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { NavbarComponent, NavlinkComponent, NavmenuComponent, ModalFormComponent } from './components';

@NgModule({
    imports: [
        CommonModule, FormsModule, RouterModule
    ],
    exports: [
        NavbarComponent, NavlinkComponent, NavmenuComponent, ModalFormComponent
    ],
    declarations: [
        NavbarComponent, NavlinkComponent, NavmenuComponent, ModalFormComponent
    ]
})
export class SharedModule{ }