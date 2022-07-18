import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpRequestService {

  constructor(
    private http: HttpClient
  ) { }

  get( urlPath:string ): Observable<any>{
    const urlRequest = `${environment.endpoints.baseUrl}${urlPath}`;
    return this.http.get(urlRequest)
  }
}
