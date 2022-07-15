import React from "react";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h5>{props.meaning.partOfSpeech}</h5>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p>
              <span>{definition.definition}</span>
              <br />
              <span className="example">{definition.example}</span>
            </p>
          </div>
        );
      })}
    </div>
  );
}
