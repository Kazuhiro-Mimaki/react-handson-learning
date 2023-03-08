import { FC } from "react";
import { GitHubRepository } from "./models/githubRepositories";
import { RepoMenu } from "./RepoMenu";
import { useFetch } from "./useFetch";

type Props = {
  login: string;
  onSelect: (input: string) => void;
};

export const UserRepositories: FC<Props> = ({ login, onSelect }) => {
  const { loading, data, error } = useFetch<GitHubRepository[]>(
    `https://api.github.com/users/${login}/repos`
  );

  if (error) {
    return <pre>{JSON.stringify(error, null, 2)}</pre>;
  }

  if (loading) {
    return <h1>loading...</h1>;
  }

  if (!data) {
    return null;
  }

  return <RepoMenu repositories={data} login={login} onSelect={onSelect} />;
};
