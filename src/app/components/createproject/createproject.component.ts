import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project';
import { ProjectService } from 'src/app/services/project/project.service';

@Component({
  selector: 'app-createproject',
  templateUrl: './createproject.component.html',
  styleUrls: ['./createproject.component.css']
})
export class CreateprojectComponent implements OnInit {

  title: string;
  project: Project;

  constructor(private projectService: ProjectService) {
    this.title = 'Crear proyecto';
    this.project = new Project('', '', '', '', 2020, '', '');
   }

  ngOnInit(): void {
  }

  onSubmit(form:any){
    console.log(this.project);
  }

}



