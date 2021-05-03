import { Component,Input, OnInit } from '@angular/core';
import { IMeal } from '../interfaces/IMeal';

@Component({
  selector: 'app-meal',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.css']
})
export class MealComponent implements OnInit {
  @Input() meal :  IMeal ={} as IMeal;

  constructor() { }

  ngOnInit(): void {
  }

}
