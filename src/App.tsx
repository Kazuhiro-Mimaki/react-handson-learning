import React, { useState } from "react";
import { GitHubUser } from "./components";
import { UserRepositories } from "./components/UserRepositories";

function App() {
  const [login, setLogin] = useState("");

  return (
    <>
      <input type="text" onChange={(e) => setLogin(e.target.value)} />
      {login && <GitHubUser login={login} />}
      {login && <UserRepositories login={login} />}
    </>
  );
}

export default App;
