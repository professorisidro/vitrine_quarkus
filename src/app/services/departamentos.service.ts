import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DepartamentosService {

  constructor(private http: HttpClient) { }

  getAllDepartamentos(){
    return this.http.get("http://vitrine-virtual-quarkus-live-isidro.apps.us-west-1.starter.openshift-online.com/departamentos");
  }
}
