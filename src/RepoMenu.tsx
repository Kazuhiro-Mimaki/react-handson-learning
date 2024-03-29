import { FC, useEffect } from "react";
import { GitHubRepository } from "./models/githubRepositories";
import { RepositoryReadme } from "./RepositoryReadme";
import { useIterator } from "./useIterator";

type Props = {
  repositories: GitHubRepository[];
  login: string;
  onSelect: (input: string) => void;
};

export const RepoMenu: FC<Props> = ({ repositories, login, onSelect }) => {
  const [item, previous, next] = useIterator(repositories);

  useEffect(() => {
    if (!item || !item.name) return;
    onSelect(item.name);
  }, [item]);

  if (!item || !item.name) {
    return null;
  }

  return (
    <>
      <div style={{ display: "flex" }}>
        <button onClick={previous}>&lt;</button>
        <p>{item.name}</p>
        <button onClick={next}>&gt;</button>
      </div>
      <RepositoryReadme login={login} repo={item.name} />
    </>
  );
};
