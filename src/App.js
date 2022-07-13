import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>Dictionary</h1>
        </header>
        <main>
          <h2>What do you want to learn about?</h2>
          <Dictionary />
        </main>
      </div>
      <footer className="App-footer">Coded by Margaret Skinner</footer>
    </div>
  );
}
