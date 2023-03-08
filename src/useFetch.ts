import { useEffect, useState } from "react";

type GitHubAPIResponse = {
  name: string;
  login: string;
  avatar_url: string;
  location: string;
};

export const useFetch = (uri: string) => {
  const [data, setData] = useState<GitHubAPIResponse>();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!uri) return;
    fetch(uri)
      .then((res) => res.json())
      .then(setData)
      .then(() => setLoading(false))
      .catch(setError);
  }, [uri]);

  return {
    data,
    error,
    loading,
  };
};
