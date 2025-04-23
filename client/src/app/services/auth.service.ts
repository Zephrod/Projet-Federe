import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) {}

  /* // ! route test
  getHello(): Observable<any> {
    return this.http.get('http://localhost:3000/');
  }
  */
  getUser(): Observable<any> {
    return this.http.get('http://localhost:3000/users');
  } 
  createUser(user : any): Observable<any> {
    return this.http.post('http://localhost:3000/user', user);
  }  
  login(credentials: {email: string, password: string }){
    return this.http.post<any>('http://localhost:3000/login',credentials);
  }
  deleteUser(userId: string): Observable<any> {
    console.log("ID à supprimer:", userId); 
    return this.http.delete(`http://localhost:3000/user/${userId}`);
  }

}
