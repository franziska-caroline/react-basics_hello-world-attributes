import React from "react";
import "./styles.css";

export default function App() {
  return (
    <article>
      <h2 className="article__title">Wir mögen Oktopoden</h2>
      <label htmlFor="newInput"></label>
      <input id="newInput"></input>
      <a
        href="https://de.wikipedia.org/wiki/Oktopusse"
        className="article__link"
      >
        Oktopoden
      </a>
    </article>
  );
}
