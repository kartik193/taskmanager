import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './shared/layout/layout/layout.component';
import { TaskListComponent } from './task-list/task-list.component';
import { CrateTaskComponent } from './crate-task/crate-task.component';
import { DetailsListComponent } from './details-list/details-list.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'list-task', pathMatch: 'full' },
      { path: 'list-task', component: TaskListComponent },
      {
        path: 'create-task',
        component: CrateTaskComponent,
      },
      {
        path: 'create-task/:id',
        component: CrateTaskComponent,
      },
      {
        path: 'details-task/:id',
        component: DetailsListComponent,
      },
    ],
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
