import { useState } from 'react';
import './App.css';

function App() {
  const [result, setResult] = useState(0);
  return (
    <div id="div-calculator">
      <div id="div-visor-calculator">
        <div id="div-visor-result">
          <p id="p-result">{result}</p>
        </div>
      </div>
      <div id="div-buttons-calculator">
        <button className="button-calculator" id="button-ac">AC</button>
        <button className="button-calculator">%</button>
        <button className="button-calculator">X</button>
        <button className="button-calculator">%</button>
        <button className="button-calculator">7</button>
        <button className="button-calculator">8</button>
        <button className="button-calculator">9</button>
        <button className="button-calculator">-</button>
        <button className="button-calculator">4</button>
        <button className="button-calculator">5</button>
        <button className="button-calculator">6</button>
        <button className="button-calculator">+</button>
        <button className="button-calculator">1</button>
        <button className="button-calculator">2</button>
        <button className="button-calculator">3</button>
        <button id="button-placeholder">fake</button>
        <button className="button-calculator">0</button>
        <button className="button-calculator">.</button>
        <button className="button-calculator">+/-</button>

        <button className="button-calculator" id="button-equal">=</button>
      </div>
    </div>
  );
}

export default App;
