import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");

  function Search(event) {
    event.preventDefault();
    alert(`Searching for ${keyword} definition`);
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
    </div>
  );
}
