import React, { useState } from "react";
import { GitHubUser } from "./components";

function App() {
  const [login, setLogin] = useState("moonhighway");

  return (
    <>
      <input type="text" onChange={(e) => setLogin(e.target.value)} />
      <GitHubUser login={login} />
    </>
  );
}

export default App;
