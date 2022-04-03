import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { CreateprojectComponent } from './components/createproject/createproject.component';
import { ContactComponent } from './components/contact/contact.component';
import { EditprojectComponent } from './components/editproject/editproject.component';
import { ListprojectComponent } from './components/listproject/listproject.component';
import { ErrorComponent } from './components/error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ProjectsComponent,
    CreateprojectComponent,
    ContactComponent,
    EditprojectComponent,
    ListprojectComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
