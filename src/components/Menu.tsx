import React, { FC } from "react";
import { RecipeType } from "../models";
import { Recipe } from "./Recipe";
import { StarRating } from "./StarRating";

type Props = {
  recipes: RecipeType[];
};

export const Menu: FC<Props> = ({ recipes }) => {
  return (
    <article>
      <header>
        <h1>Delicious Recipes</h1>
      </header>
      <div className="recipes">
        {recipes.map((recipe, i) => (
          <Recipe key={i} {...recipe} />
        ))}
      </div>

      <StarRating totalStars={5} />
    </article>
  );
};
