import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function Search(event) {
    event.preventDefault();

    // https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={Search}>
        <input
          className="search-input"
          type="search"
          onChange={handleKeywordChange}
          autoFocus={true}
          placeholder="Type a word..."
        />
        <button className="search-button">Search</button>
      </form>
      <Results results={results} />
    </div>
  );
}
