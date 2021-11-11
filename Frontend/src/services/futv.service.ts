import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class FUTVService {

  url = 'http://localhost:3000';
  constructor(private http: HttpClient) {}

  addImage(file:any): Observable<any>{

    var formData:any = new FormData();

    for(let i =0; i < file.length; i++){
      formData.append("image", file[i], file[i]['name']);
    }

    console.log(formData.length)
    return this.http.post(this.url+"/fotos", formData);
  }

  getImages(): Observable<any>{
    return this.http.get(this.url + "/fotos", {responseType: 'json'});
  }

  getImagesFinal(name:any){
    return this.url + "/public/uploads/" + name;
  }

}

export interface FUTV_IMAGES{
  id?:string
  imagen?:number
}

