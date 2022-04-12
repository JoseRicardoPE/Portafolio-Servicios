import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from 'src/app/models/project';
import { Global } from '../global';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  // Creo una variable url, que va ser donde guarde la url mi api
  url: string;

  constructor(private http: HttpClient) { //inyecto el servicio HttpClient
    this.url = Global.url;
   }

  // Método de prueba
  testService(){
    return 'Probando el servicio de Angular';
  }

  saveProject(project: Project): Observable<any>{
    // para enviar los parámetros, todos los datos del objeto, pero lo enviamos como JSON para que el API pueda cogerlo 
    let parametros = JSON.stringify(project);

    // para establecer las cabeceras, es decir, como se va enviar la información
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    // hacemos la petición por POST
    // save-project es la ruta establecida en el backend para guardar los proyectos
    // parametros -> los datos a guardar en el backend y los headers
    return this.http.post(this.url + 'save-project', parametros, {headers: headers});
  }

  // Método para listado de proyectos del Portafolio
  getProjects(): Observable<any>{

    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    // petición AJAX por GET 'get-projects' es la ruta que se asignó en el BACKEND para listar todos los proyectos.
    return this.http.get(this.url + 'get-projects', {headers: headers});
  }
}


