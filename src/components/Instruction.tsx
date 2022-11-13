import React, { FC } from "react";

type Props = {
  title: string;
  steps: string[];
};

export const Instructions: FC<Props> = ({ title, steps }) => {
  return (
    <section className="instructions">
      <h2>{title}</h2>
      {steps.map((step, i) => (
        <p key={i}>{step}</p>
      ))}
    </section>
  );
};
