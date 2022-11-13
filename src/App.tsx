import React, { useState } from "react";
import { GitHubUser } from "./components";
import { UserRepositories } from "./components/UserRepositories";

function App() {
  const [login, setLogin] = useState("moonhighway");
  const [repo, setRepo] = useState("learning-react");

  return (
    <>
      <input type="text" onChange={(e) => setLogin(e.target.value)} />
      {login && <GitHubUser login={login} />}
      {login && (
        <UserRepositories login={login} repo={repo} onSelect={setRepo} />
      )}
    </>
  );
}

export default App;
