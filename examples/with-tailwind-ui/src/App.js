import logo from "./logo.svg";
import "./App.css";

import AuthorSearchForm from "./ui/components/author-search";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <AuthorSearchForm />
      </header>
    </div>
  );
}

export default App;
