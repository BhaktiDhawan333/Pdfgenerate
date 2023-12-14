import { Injectable,  } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const baseurl = `${environment.apiurl}`;
@Injectable({
  providedIn: 'root'
})
export class UserService{

  constructor(private http:HttpClient) { }


 
  getAll(){
    return this.http.get(baseurl);
  }

  getDataById(id:any){
    return this.http.get(baseurl+id);
  }

  Delete(id:any){
    return this.http.delete(baseurl+id);
  }




}
