import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  
 
  private apiUrl = 'http://localhost:8080/users/';

  constructor(private http: HttpClient) { }

  register(userData:any): Observable<any> {
    return this.http.post<any>(this.apiUrl+'create', userData);
  }


  login(loginData: any) {
    return this.http.post<any>(this.apiUrl+'login', loginData);
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('isLoggedIn');
  }

  getRoles() {
    return this.http.get<any>(this.apiUrl+'getRoles');
  }


}
