import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { Recipe } from './../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recepieWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe(
      'Mediterranean Breakfast Burrata Platter',
      'There s never a wrong time to eat burrata. This healthy but hearty recipe will quickly become one of your go-to dishes, and its perfect to serve if youre hosting brunch.',
      'data:image/jpeg;base64,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'),
    new Recipe(
      'Blue Cheese Burgers',
      'Fabulous grilled blue cheese burgers, with ground beef, mustard, garlic, green onions, and tangy creamy blue cheese.',
      'https://www.simplyrecipes.com/thmb/XMM7nk1Hmxiiuh6fBPFdIaCfBCM=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2008__04__blue-cheese-burger-vertical-a-1800-d7a851b7f13144fd96f035d463db2f08.jpg')
  ];
  constructor() { }

  ngOnInit(): void {
  }

  onSelectedRecipe(recipe: Recipe) {
    this.recepieWasSelected.emit(recipe);
  }
}
