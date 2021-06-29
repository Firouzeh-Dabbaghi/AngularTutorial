import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe(
      'Mediterranean Breakfast Burrata Platter',
      'There s never a wrong time to eat burrata. This healthy but hearty recipe will quickly become one of your go-to dishes, and its perfect to serve if youre hosting brunch.',
      'https://i2.wp.com/www.eatthis.com/wp-content/uploads/2019/11/breakfast-burrata.jpg?resize=640%2C468&ssl=1')
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
