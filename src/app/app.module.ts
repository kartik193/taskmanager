import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './shared/sidebar/sidebar/sidebar.component';
import { HeaderComponent } from './shared/header/header/header.component';
import { LayoutComponent } from './shared/layout/layout/layout.component';
import { CrateTaskComponent } from './crate-task/crate-task.component';
import { TaskListComponent } from './task-list/task-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DetailsListComponent } from './details-list/details-list.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HeaderComponent,
    LayoutComponent,
    CrateTaskComponent,
    TaskListComponent,
    DetailsListComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
