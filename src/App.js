import React from "react";
import "./styles.css";

export default function App() {
  return <Article />;
}

export function Article() {
  return (
    <article>
      <h2 className="article__title">Wir mögen Oktopoden</h2>
      <label htmlFor="question">Question</label>
      <input id="question"></input>
      <a
        className="article__link"
        href="https://de.wikipedia.org/wiki/Oktopusse"
      >
        Oktopoden
      </a>
    </article>
  );
}
