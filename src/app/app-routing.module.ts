import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { CreateprojectComponent } from './components/createproject/createproject.component';
import { DetailProjectComponent } from './components/detail-project/detail-project.component';
import { ErrorComponent } from './components/error/error.component';
import { ProjectsComponent } from './components/projects/projects.component';

const routes: Routes = [
  {path: '', component: AboutComponent},
  {path: 'sobre-mi', component: AboutComponent},
  {path: 'proyectos', component: ProjectsComponent},
  {path: 'crear-proyecto', component: CreateprojectComponent},
  {path: 'contacto', component: ContactComponent},
  {path: 'proyecto/:id', component: DetailProjectComponent},
  {path: '**', component: ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


// le paso como parámetro por la URL el id de mi proyecto
