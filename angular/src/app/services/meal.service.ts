import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IMeal } from '../interfaces/IMeal';

@Injectable({
  providedIn: 'root'
})
export class MealService {

  private mealurl :string = "../assets/meals.json"
  constructor(private http: HttpClient) { }

  getMeals(): Observable<IMeal[]>{
    return this.http.get<IMeal[]>(this.mealurl);
  }

}
