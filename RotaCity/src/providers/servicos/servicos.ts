import { Http, Headers, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map'


@Injectable()
export class ServicosProvider {

  api: string = 'http://localhost/api/';

  constructor(public http: Http) {
    
  }

  listarDados() {
    return this.http.get(this.api + 'listar.php').map(res=>res.json());
  }



}
