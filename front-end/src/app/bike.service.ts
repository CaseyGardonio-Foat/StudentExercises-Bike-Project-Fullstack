import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  Headers: new HttpHeaders({'Content-type': 'application/json' })
}

@Injectable({
  providedIn: 'root'
})
export class BikeService {

  constructor(private httpClient: HttpClient) { }

  getBikes(){
    return this.httpClient.get('/server/api/v1/bikes');
  }

  getBike(id: number){
    return this.httpClient.get('/server/api/v1/bikes/' + id);
  }

  createBikeRegistration(bike){
    let body = JSON.stringify(bike);
    console.log(body);
    return this.httpClient.post('/server/api/v1/bikes', body);
  }

}
