import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project';
import { Global } from 'src/app/services/global';
import { ProjectService } from 'src/app/services/project/project.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-detail-project',
  templateUrl: './detail-project.component.html',
  styleUrls: ['./detail-project.component.css']
})
export class DetailProjectComponent implements OnInit {

  public url: string;

  // Propiedad para en caso de que llegue la respuesta en el response de getProject(){}
  public project: Project

  constructor(private projectService: ProjectService,
              private router: Router,
              private route: ActivatedRoute) {
    this.url = Global.url;
  }

  ngOnInit(): void {
    // Acá ya puedo recoger los parámetros por la URL
    this.route.params.subscribe(params => {
      let id = params['id'];
      // Llamo al método que acabo de crear y le paso el id como parámetro
      this.getProject(id);
    });
  }

  // Método para mostrar un único proyecto 
  getProject(id: any){
    this.projectService.getProject(id).subscribe(
      response => {
        this.project = response.project; //será lo que llega del API
      }, error => {
         console.log(error);
      }
    )
  }

}


