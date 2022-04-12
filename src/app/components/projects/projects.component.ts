import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project'
import { Global } from 'src/app/services/global';
import { ProjectService } from 'src/app/services/project/project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  public projects: Project[];
  // propiedad para mostrar la imágen
  public url: string;

  constructor(private projectService: ProjectService) {
    this.url = Global.url;
  }

  ngOnInit(): void {
    this.getProjects();
  }

  getProjects(){
    this.projectService.getProjects().subscribe(
      response => {
        if(response.projects){
          this.projects = response.projects;
        }
      }, error => {
        console.log(error);
      }
    );
  }

}


