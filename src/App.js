import "./App.css";
import data from "./data.json";
import { Card } from "./containers";

function App() {
  return (
    <div className="app-container">
      <header>
        <h1>Social Cards</h1>
      </header>
      <div className="cards-container">
        {data.map((cardDetails, idx) => {
          return <Card key={idx} {...cardDetails} />;
        })}
      </div>
      <footer>
        <span>Made by Hudson Ballina</span>
      </footer>
    </div>
  );
}

export default App;
