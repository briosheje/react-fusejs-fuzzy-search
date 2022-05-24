import { useState } from "react";

import logo from "./logo.svg";
import "./App.css";

import { FuseSearchWrapper } from "react-fusejs-fuzzy-search";

const searchArray = [
  {
    title: "Old Man's War",
    author: "John Scalzi",
    tags: ["fiction"],
  },
  {
    title: "The Lock Artist",
    author: "Steve",
    tags: ["thriller"],
  },
];

function App() {
  const [term, setTerm] = useState("");

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <FuseSearchWrapper
          list={searchArray}
          searchOpts={{
            limit: 10,
          }}
          fuseOpts={{
            includeScore: true,
            keys: ["author", "tags"],
          }}
          searchComponentBuilder={(search) => (
            <>
              <input
                type="text"
                defaultValue={term}
                onChange={(evt) => setTerm(evt.target.value)}
                // onInput={(evt) => setSearch(evt.target.value)}
              />
              <button type="button" onClick={() => search(term)}>
                Search for {term}
              </button>
            </>
          )}
          resultsBuilder={(results) => (
            <ul>
              {results.map((v) => (
                <li>{JSON.stringify(v)}</li>
              ))}
            </ul>
          )}
        />
      </header>
    </div>
  );
}

export default App;
