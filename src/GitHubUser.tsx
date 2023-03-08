import { FC, useEffect, useState } from "react";

type Props = {
  login: string;
};

type GitHubAPIResponse = {
  name: string;
  login: string;
  avatar_url: string;
  location: string;
};

export const GitHubUser: FC<Props> = ({ login }) => {
  const [data, setData] = useState<GitHubAPIResponse>();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!login) return;
    setLoading(true);
    fetch(`https://api.github.com/users/${login}`)
      .then((res) => res.json())
      .then(setData)
      .then(() => setLoading(false))
      .catch(setError);
  }, [login]);

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
    </div>
  );
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
};
