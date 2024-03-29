import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h5>{props.meaning.partOfSpeech}</h5>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <div>
              <span className="definition">{definition.definition}</span>
              <br />
              <span className="example">{definition.example}</span>
              <Synonyms synonyms={definition.synonyms} />
            </div>
          </div>
        );
      })}
    </div>
  );
}
