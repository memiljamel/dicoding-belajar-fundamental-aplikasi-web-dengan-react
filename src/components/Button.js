import clsx from 'clsx';
import PropTypes from 'prop-types';

function Button({ onClick, type = 'button', text, color = 'normal' }) {
  return (
    <button className={clsx("w-auto min-w-[64px] h-9 px-4 m-0 align-middle border-0 rounded font-Roboto font-medium capitalize text-sm text-white tracking-[1.25px] outline-none select-none", {
      'bg-[#6200ee]': color === 'normal',
      'bg-[#d32f2f]': color === 'danger',
    })} onClick={onClick} type={type}>{text}</button>
  );
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  type: PropTypes.oneOf(['submit', 'button']),
  text: PropTypes.string.isRequired,
  color: PropTypes.oneOf(['normal', 'danger'])
};

export default Button;