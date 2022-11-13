import React, { FC } from "react";
import { Fetch } from "./Fetch";
import { GitHubRepositoryData } from "./hooks";
import { RepoMenu } from "./RepoMenu";

type Props = {
  login: string;
  repo: string;
  onSelect: (name: string) => void;
};

export const UserRepositories: FC<Props> = ({ login, repo, onSelect }) => {
  return (
    <Fetch
      uri={`https://api.github.com/users/${login}/repos`}
      renderSuccess={({ data }: { data: GitHubRepositoryData[] }) => (
        <RepoMenu repositories={data} selected={repo} onSelect={onSelect} />
      )}
    />
  );
};
