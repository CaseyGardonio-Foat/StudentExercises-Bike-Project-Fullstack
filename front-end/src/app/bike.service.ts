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
    let token = localStorage.getItem('access_token');
    return this.httpClient.get(
      '/server/api/v1/bikes',
      {headers: new HttpHeaders().set('Authorization', 'Bearer '+token)}
    );
  }

  getBike(id: number){
    let token = localStorage.getItem('access_token');
    return this.httpClient.get(
      '/server/api/v1/bikes/' + id,
      {headers: new HttpHeaders().set('Authorization', 'Bearer '+token)}
    );
  }

  createBikeRegistration(bike){
    let body = JSON.stringify(bike);
    console.log(body);
    return this.httpClient.post('/server/api/v1/bikes', body);
  }

}
