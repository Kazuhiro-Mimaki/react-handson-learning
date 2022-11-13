import React, { FC } from "react";
import { FaStar } from "react-icons/fa";

type Props = {
  selected: boolean;
  onSelect: () => void;
};

export const Star: FC<Props> = ({ selected = false, onSelect }) => (
  <>
    <FaStar color={selected ? "red" : "grey"} onClick={onSelect} />
  </>
);
