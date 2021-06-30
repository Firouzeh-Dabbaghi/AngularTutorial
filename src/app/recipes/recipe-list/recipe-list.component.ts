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
      'https://i2.wp.com/www.eatthis.com/wp-content/uploads/2019/11/breakfast-burrata.jpg?resize=640%2C468&ssl=1'),
    new Recipe(
      'Blue Cheese Burgers',
      'Fabulous grilled blue cheese burgers, with ground beef, mustard, garlic, green onions, and tangy creamy blue cheese.',
      'https://www.simplyrecipes.com/thmb/XMM7nk1Hmxiiuh6fBPFdIaCfBCM=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2008__04__blue-cheese-burger-vertical-a-1800-d7a851b7f13144fd96f035d463db2f08.jpg')
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
