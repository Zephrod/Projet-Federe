import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getHello(): Observable<any> {
    return this.http.get('http://localhost:3000/');
  }
<<<<<<< HEAD
}
=======
  getUser(): Observable<any> {
    return this.http.get('http://localhost:3000/users');
  } 
}
>>>>>>> 74c34aec1076df981ad8a04df9a41477781c67c1
