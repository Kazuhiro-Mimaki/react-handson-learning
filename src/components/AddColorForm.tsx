import React, { FC, ChangeEvent } from "react";
import { useInput } from "../hooks";

type Props = {
  onNewColor: (title: string, color: string) => void;
};

export const AddColorForm: FC<Props> = ({ onNewColor }) => {
  const { props: titleProps, resetValue: resetTitle } = useInput("");
  const { props: colorProps, resetValue: resetColor } = useInput("#000000");

  const submit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    onNewColor(titleProps.value, colorProps.value);
    resetTitle();
    resetColor();
  };

  return (
    <form onSubmit={submit}>
      <input
        {...titleProps}
        type="text"
        placeholder="color title..."
        required
      />
      <input {...colorProps} type="color" required />
      <button>ADD</button>
    </form>
  );
};
