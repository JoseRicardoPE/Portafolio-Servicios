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
}


