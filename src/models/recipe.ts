import { IngredientType } from "./ingredient";

export type RecipeType = {
  name: string;
  ingredients: IngredientType[];
  steps: string[];
};
