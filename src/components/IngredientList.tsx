import React, { FC } from "react";
import { IngredientType } from "../models";
import { Ingredient } from "./Ingredient";

type Props = {
  list: IngredientType[];
};

export const IngredientList: FC<Props> = ({ list }) => {
  return (
    <ul className="ingredients">
      {list.map((ingredient, i) => (
        <Ingredient key={i} {...ingredient} />
      ))}
    </ul>
  );
};
