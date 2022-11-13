import React, { useEffect, useState } from "react";

export type GitHubData = {
  avatar_url: string;
  login: string;
  name: string;
  location: string;
};

export const useFetch = (uri: string) => {
  const [data, setData] = useState<GitHubData>();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!uri) return;
    fetch(uri)
      .then((data) => data.json())
      .then(setData)
      .then(() => setLoading(false))
      .catch(setError);
  }, [uri]);

  return {
    loading,
    data,
    error,
  };
};
