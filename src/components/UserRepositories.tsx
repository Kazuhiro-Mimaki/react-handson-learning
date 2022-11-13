import React, { FC, useState } from "react";
import { Fetch } from "./Fetch";
import { GitHubRepositoryData } from "./hooks";
import { RepoMenu } from "./RepoMenu";

type Props = {
  login: string;
};

export const UserRepositories: FC<Props> = ({ login }) => {
  const [repo, setRepo] = useState("");

  return (
    <Fetch
      uri={`https://api.github.com/users/${login}/repos`}
      renderSuccess={({ data }: { data: GitHubRepositoryData[] }) => (
        <RepoMenu repositories={data} selected={repo} onSelect={setRepo} />
      )}
    />
  );
};
