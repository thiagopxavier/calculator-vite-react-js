import { useState } from 'react';
import './App.css';
import Button from './components/Button';

function App() {
  const [visor, setVisor] = useState(0);
  const [operator, setOperator] = useState();
  const [oldNumber, setOldNumber] = useState();

  const handleNum = ({ target: { value } }) => {
    if (visor === 0) {
      setVisor(value);
    } else {
      setVisor(visor + value);
    }
  };

  const calculate = () => {
    switch (operator) {
    case 'X':
      setVisor(Number(oldNumber) * Number(visor));
      break;
    case '/':
      setVisor(Number(oldNumber) / Number(visor));
      break;
    case '-':
      setVisor(Number(oldNumber) - Number(visor));
      break;
    case '+':
      setVisor(Number(oldNumber) + Number(visor));
      break;
    default:
      break;
    }
  };

  const handleFunc = ({ target: { value } }) => {
    switch (value) {
    case 'AC':
      setVisor(0);
      break;
    case '%':
      setVisor(visor / 100);
      break;
    case '=':
      calculate();
      break;
    case '+/-':
      setVisor(visor > 0 ? -visor : Math.abs(visor));
      break;
    case '.':
      setVisor(visor + value);
      break;
    default:
      setOldNumber(visor);
      setOperator(value);
      setVisor(0);
      break;
    }
  };

  return (
    <div id="div-calculator">
      <div id="div-visor-calculator">
        <div id="div-visor-result">
          <p id="p-result">{visor}</p>
        </div>
      </div>
      <div id="div-buttons-calculator">
        <Button handleNum={ handleNum } handleFunc={ handleFunc } />
      </div>
    </div>
  );
}

export default App;
