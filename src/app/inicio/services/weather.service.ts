import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http:HttpClient) { }

  weather(): Observable<any> {
    return this.http.get<any>(`api.openweathermap.org/data/2.5/weather?q=tucuman&appid=2a5bc3eaa7d0f08a7ff3f7d35f8e6051`)
  } 
}
