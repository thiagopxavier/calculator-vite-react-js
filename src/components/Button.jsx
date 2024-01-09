import PropTypes from 'prop-types';

function Button({ handleNum, handleFunc }) {
  const buttons = [
    'AC', '%', 'X', '/',
    '7', '8', '9', '-',
    '4', '5', '6', '+',
    '1', '2', '3', 'fake',
    '0', '.', '+/-', '='];

  const verifyId = (button) => {
    switch (button) {
    case 'AC':
      return 'button-ac';
    case 'fake':
      return 'button-placeholder';
    case '=':
      return 'button-equal';
    default:
      break;
    }
  };

  return (
    <>
      {buttons.map((button, index) => (
        <button
          key={ index }
          className="button-calculator"
          id={ verifyId(button) }
          value={ button }
          onClick={ Number(button) || button === '0' ? handleNum : handleFunc }
        >
          {button}
        </button>
      ))}
    </>

  );
}

Button.propTypes = {
  handleFunc: PropTypes.func,
  handleNum: PropTypes.func,
}.isRequired;

export default Button;
