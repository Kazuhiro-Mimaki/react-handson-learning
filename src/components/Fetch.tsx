import React, { FC } from "react";
import { GitHubData, useFetch } from "./hooks";

type Props = {
  uri: string;
  renderSuccess: ({ data }: { data: GitHubData }) => void;
  loadingFallback?: any;
  renderError?: (error: string) => JSX.Element;
};

export const Fetch: FC<Props> = ({
  uri,
  renderSuccess,
  loadingFallback = <p>loading...</p>,
  renderError = (error: string) => <pre>{JSON.stringify(error, null, 2)}</pre>,
}) => {
  const { loading, data, error } = useFetch(uri);

  if (error) return renderError(error);
  if (loading) return loadingFallback;
  if (data) return renderSuccess({ data });
};
