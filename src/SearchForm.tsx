import { FC } from "react";

type Props = {
  value: string;
  onSearch: (input: string) => void;
};

export const SearchForm: FC<Props> = ({ value, onSearch }) => {
  return (
    <div className="searchForm">
      <input
        type="text"
        value={value}
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
};
