import { useCallback, useEffect, useMemo, useState } from "react";

export type GitHubData = {
  avatar_url: string;
  login: string;
  name: string;
  location: string;
};

export const useFetch = (uri: string) => {
  const [data, setData] = useState<any>();
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

export type GitHubRepositoryData = {
  name: string;
};

export const useIterator = (
  items: GitHubRepositoryData[] = [],
  initialIndex = 0
) => {
  const [i, setIndex] = useState(initialIndex);

  console.log(i);

  const prev = useCallback(() => {
    if (i === 0) return setIndex(items.length - 1);
    setIndex(i - 1);
  }, [i, items.length]);

  const next = useCallback(() => {
    if (i === items.length - 1) return setIndex(0);
    setIndex(i + 1);
  }, [i, items.length]);

  const item = useMemo(() => items[i], [items, i]);

  return [item || items[0], prev, next] as const;
};
