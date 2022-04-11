import { Component, OnInit } from '@angular/core';
import { interval, timeout, timer } from 'rxjs';
import { Project } from 'src/app/models/project';
import { Global } from 'src/app/services/global';
import { ProjectService } from 'src/app/services/project/project.service';
import { UploadService } from 'src/app/services/upload/upload.service';

@Component({
  selector: 'app-createproject',
  templateUrl: './createproject.component.html',
  styleUrls: ['./createproject.component.css']
})
export class CreateprojectComponent implements OnInit {

  public title: string;
  public project: Project;
  public status: string;

  // propiedad para indicar los archivos que voy a subir
  public filesToUpload: Array<File>;

  constructor(private projectService: ProjectService,
              private uploadService: UploadService,) {
    this.title = 'Crear proyecto';
    this.project = new Project('', '', '', '', 2020, '', '');
   }

  ngOnInit(): void {
  }

  onSubmit(form:any){
    console.log(this.project);
    
    // Guardar los datos
    this.projectService.saveProject(this.project).subscribe( //this.project es el objeto a guardar
      response => {                                          //el método .subscribe me permite recoger lo 
        if(response.project){                                //que me devuelva el API-REST, recoger los resultados
                    
          // Aquí es cuando se sube la imágen
          this.uploadService.makeFileRequest(Global.url + 'upload-file/' + response.project._id, [], this.filesToUpload, 'image')
          .then( (result: any) => {
            this.status = 'success';
            console.log(result);
            form.reset();
          });
          
        } else {
          this.status = 'failed';
        }
      }, error => {
        console.log(error) 
      }
    );
  }


  fileChangeEvent(event: any) {
    // Acá ya tengo listos los archivos que quiero subir.
    // Hice un casting para forzarlo que sea un array de tipo file
    this.filesToUpload = <Array<File>>event.target.files;
  }

}






