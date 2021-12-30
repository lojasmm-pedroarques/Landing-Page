import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:4200/vagas';
@Injectable({
  providedIn: 'root'
})
export class StatusService {


  constructor(private http: HttpClient) { }

/*


  getStatus(): Promise<void | any> {
    return this.http.get(this.statusUrl)
               .toPromise()
               .then(response => response)
               .catch(this.error);
  }

  private error (error: any) {
    let message = (error.message) ? error.message :
    error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(message);
  }
}*/
}