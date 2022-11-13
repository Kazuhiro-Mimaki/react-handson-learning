import React, { FC } from "react";
import { IngredientType } from "../models";
import { IngredientList } from "./IngredientList";
import { Instructions } from "./Instruction";

type Props = {
  name: string;
  ingredients: IngredientType[];
  steps: string[];
};

export const Recipe: FC<Props> = ({ name, ingredients, steps }) => {
  return (
    <section id={name.toLowerCase().replace(/ /g, "-")}>
      <h1>{name}</h1>
      <IngredientList list={ingredients} />
      <Instructions title="Cooking Instructions" steps={steps} />
    </section>
  );
};
