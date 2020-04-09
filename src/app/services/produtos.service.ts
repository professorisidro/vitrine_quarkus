import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  constructor(private http: HttpClient) { }

  getAllProducts(){
    return this.http.get("http://vitrine-virtual-quarkus-live-isidro.apps.us-west-1.starter.openshift-online.com/produtos");
  }
}
