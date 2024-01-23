import { useState, useEffect } from 'react';
import './App.css';
import Button from './components/Button';

function App() {
  const [visor, setVisor] = useState(0);
  const [operator, setOperator] = useState();
  const [oldNumber, setOldNumber] = useState();





  const handleNum = ({ target: { value } }) => {
    if (visor === 0) {
      console.log(value)
      setVisor(value);
    } else if (visor.length <= 11) {
      setVisor(visor + value);
    }

  };

  const calculate = () => {
    switch (operator) {
      case 'X':
        setVisor(Number(oldNumber) * Number(visor));
        break;
      case 'x':
        setVisor(Number(oldNumber) * Number(visor));
        break;
      case '*':
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
    console.log(value)
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
      case 'Enter':
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

  useEffect(() => {
    const handleKeyPress = (event) => {
      const keyPressed = event.key;
      const isNumber = !isNaN(Number(keyPressed));
      const isOperator = ['+', '-', '*', '/', 'Backspace', 'Enter', '.', '%', 'x', '='].includes(keyPressed);

      if (isNumber) {
        handleNum({ target: { value: keyPressed } });
      } else if (isOperator) {
        handleFunc({ target: { value: keyPressed } });
      }
    };

    document.body.addEventListener('keydown', handleKeyPress);
    return () => {
      document.body.removeEventListener('keydown', handleKeyPress);
    };
  }, [handleNum, handleFunc]);

  return (
    <div id="div-calculator">
      <div id="div-visor-calculator">
        <div id="div-visor-result">
          <p id="p-result">{visor}
          </p>
        </div>
      </div>
      <div id="div-buttons-calculator">
        <Button handleNum={handleNum} handleFunc={handleFunc} />
      </div>
    </div>
  );
}

export default App;
