import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import { MultiselectDropdownComponent } from './multiselect-dropdown/multiselect-dropdown.component';
import { SingleDropDownComponent } from './single-drop-down/single-drop-down.component';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    exports: [
//        MultiselectDropdownComponent,
        SingleDropDownComponent
    ],
    declarations: [
  //      MultiselectDropdownComponent,
        SingleDropDownComponent
    ],
    providers: [],
})
export class SharedComponentsModule { }
