import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private _http: HttpClient) { }

  create(product) {
    return this._http.post('/create', product);
  }

  all() {
    return this._http.get('/all');
  }

  getOne(id) {
    return this._http.get('/getOne/' + id);
  }

  update(product) {
    return this._http.put('/update/' + product._id, product);
  }

  delete(id) {
    return this._http.delete('/delete/' + id);
  }
}
