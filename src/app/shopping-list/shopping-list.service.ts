import { EventEmitter } from "@angular/core";
import { Ingredients } from "../shared/ingredients.model";

export class ShoppingListService {
  ingredientsChanged = new EventEmitter<Ingredients[]>();

  private ingredients: Ingredients[] = [
    new Ingredients('Apple', 5),
    new Ingredients('Orange', 15)
  ]

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredien(ingreient: Ingredients) {
    this.ingredients.push(ingreient);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

  addingredients(ingredients: Ingredients[]) {
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.emit(this.ingredients);
  }
}
