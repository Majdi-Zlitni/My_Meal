import { Component, OnInit } from '@angular/core';
import { IMeal } from '../interfaces/IMeal';
import { MealService } from '../services/meal.service';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {
  public meals :  IMeal[] = [];

  constructor(private _mealservice:MealService) { }

  ngOnInit(): void {
    this._mealservice.getMeals()
    .subscribe( response =>{
  console.log( response);
  this.meals = response;
});
  }

}
