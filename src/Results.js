import React from "react";
import Phonetics from "./Phonetics";
import Meaning from "./Meaning";
import "./Results.css";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <section>
          <h3>{props.results.word}</h3>
          {props.results.phonetics.map(function (phonetic, index) {
            return (
              <div className="phonetics" key={index}>
                <Phonetics phonetic={phonetic} />
              </div>
            );
          })}
        </section>
        <hr />
        <section>
          {props.results.meanings.map(function (meaning, index) {
            return (
              <div className="meanings" key={index}>
                <Meaning meaning={meaning} />
              </div>
            );
          })}
        </section>
      </div>
    );
  } else {
    return null;
  }
}
