import { useState } from "react";
import { GitHubUser } from "./GitHubUser";
import { SearchForm } from "./SearchForm";

function App() {
  const [login, setLogin] = useState("Kazuhiro-Mimaki");

  return (
    <>
      <SearchForm value={login} onSearch={setLogin} />
      <GitHubUser login={login} />
    </>
  );
}

export default App;
