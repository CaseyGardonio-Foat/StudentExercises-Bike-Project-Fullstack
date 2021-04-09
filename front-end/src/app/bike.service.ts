import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

const httpOptions = {
  Headers: new HttpHeaders({'Content-type': 'application/json' })
}

@Injectable({
  providedIn: 'root'
})
export class BikeService {

  constructor(private httpClient: HttpClient) { }

  getBikes(){
    return this.httpClient.get('http://localhost:8080/api/v1/bikes');
  }

}
