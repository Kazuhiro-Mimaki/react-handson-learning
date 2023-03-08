import { FC } from "react";
import { GitHubUser as GitHubUserType } from "./models/githubUsers";
import { useFetch } from "./useFetch";
import { UserRepositories } from "./UserRepositories";

type Props = {
  login: string;
};

export const GitHubUser: FC<Props> = ({ login }) => {
  const { loading, data, error } = useFetch<GitHubUserType>(
    `https://api.github.com/users/${login}`
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

  return (
    <div className="githubUser">
      <img src={data.avatar_url} alt={data.login} style={{ width: 200 }} />
      <div>
        <h1>{data.login}</h1>
        {data.name && <p>{data.name}</p>}
        {data.location && <p>{data.location}</p>}
      </div>
      <UserRepositories
        login={data.login}
        onSelect={(repoName) => console.log(`${repoName} selected`)}
      />
    </div>
  );
};
