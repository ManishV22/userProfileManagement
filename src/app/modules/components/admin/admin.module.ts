import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminRoutingModule } from './admin-routing.module';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
// import { RegisterComponent } from './register/register.component';
import { SharedComponentsModule } from 'src/app/shared/components/shared-components.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AdminBoardComponent } from './admin-board/admin-board.component';
import { AddByAdminComponent } from './admin-board/add-by-admin/add-by-admin.component';
import { ViewByAdminComponent } from './admin-board/view-by-admin/view-by-admin.component';
import { EditByAdminComponent } from './admin-board/edit-by-admin/edit-by-admin.component';


@NgModule({
    imports: [
        CommonModule,
        NgbModule,
        FormsModule,
        ReactiveFormsModule,
        AdminRoutingModule,
        MatTableModule,
        MatInputModule,
        MatIconModule,
        MatPaginatorModule,
        // MultiselectDropdownComponent
        SharedComponentsModule
    ],
    exports: [],
    declarations: [AdminBoardComponent, AddByAdminComponent, ViewByAdminComponent, EditByAdminComponent],
    providers: [],
})

export class AdminModule { }
