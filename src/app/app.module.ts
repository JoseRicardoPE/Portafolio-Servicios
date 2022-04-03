import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SobremiComponent } from './components/sobremi/sobremi.component';
import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { CreateprojectsComponent } from './components/createprojects/createprojects.component';
import { CreateprojectComponent } from './components/createproject/createproject.component';
import { ContactComponent } from './components/contact/contact.component';
import { EditprojectComponent } from './components/editproject/editproject.component';
import { ListprojectComponent } from './components/listproject/listproject.component';

@NgModule({
  declarations: [
    AppComponent,
    SobremiComponent,
    AboutComponent,
    ProjectsComponent,
    CreateprojectsComponent,
    CreateprojectComponent,
    ContactComponent,
    EditprojectComponent,
    ListprojectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
