import React, { FC } from "react";

type Props = {
  amount: number;
  measurement: string;
  name: string;
};

export const Ingredient: FC<Props> = ({ amount, measurement, name }) => {
  return (
    <li>
      {amount} {measurement} {name}
    </li>
  );
};
