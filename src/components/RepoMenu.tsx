import React, { FC, useEffect } from "react";
import { GitHubRepositoryData, useIterator } from "./hooks";

type Props = {
  repositories: GitHubRepositoryData[];
  selected: string;
  onSelect: (name: string) => void;
};

export const RepoMenu: FC<Props> = ({ repositories, selected, onSelect }) => {
  const [{ name }, previous, next] = useIterator(
    repositories,
    selected
      ? repositories.findIndex((repo) => repo.name === selected)
      : undefined
  );

  useEffect(() => {
    if (!name) return;
    onSelect(name);
  }, [name, onSelect]);

  return (
    <div style={{ display: "flex" }}>
      <button onClick={previous}>&lt;</button>
      <p>{name}</p>
      <button onClick={next}>&gt;</button>
    </div>
  );
};
