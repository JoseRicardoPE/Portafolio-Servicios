import { Injectable } from '@angular/core';
import { Global } from '../global';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  public url: string;

  constructor() {
    this.url = Global.url;
  }

  // Método para hacer una petición AJAX y poder adjuntar el archivo o imágen para poderlo subir a mi BACKEND
  makeFileRequest(url: string, parametros: Array<string>, files: Array<File>, name: string){
    return new Promise(function(resolve, reject) {
      // Acá definimos la petición AJAX para subir archivos
      let formData: any = new FormData();
      let xhr = new XMLHttpRequest();

      for(let i = 0; i < files.length; i++){
        formData.append(name, files[i], files[i].name);
      }

      // para hacer la petición AJAX
      xhr.onreadystatechange = function(){
        if(xhr.readyState === 4){
          if(xhr.status === 200){
            resolve(JSON.parse(xhr.response));
          } else {
            reject(xhr.response);
          }
        }
      }
      
      xhr.open('POST', url, true);
      xhr.send(formData);
    });
  }

}





