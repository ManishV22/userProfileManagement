import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AdminBoardComponent } from "./admin-board/admin-board.component";

const routes: Routes = [
    {
        path: 'adminBoard',
        component: AdminBoardComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class AdminRoutingModule { }