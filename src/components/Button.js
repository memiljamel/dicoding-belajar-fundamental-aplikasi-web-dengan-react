import clsx from 'clsx';
import PropTypes from 'prop-types';

function Button({ onButtonClick, type = 'button', text, color = 'normal' }) {
  return (
    <button className={clsx("w-auto min-w-[64px] h-9 px-4 m-0 align-middle border-0 rounded font-Roboto font-medium capitalize text-sm text-white tracking-[1.25px] outline-none select-none disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none", {
      'bg-sky-500 hover:bg-sky-600 focus:bg-sky-600': color === 'normal',
      'bg-pink-500 hover:bg-pink-600 focus:bg-pink-600': color === 'danger',
    })} onClick={onButtonClick} type={type}>{text}</button>
  );
}

Button.propTypes = {
  onButtonClick: PropTypes.func.isRequired,
  type: PropTypes.oneOf(['submit', 'button']),
  text: PropTypes.string.isRequired,
  color: PropTypes.oneOf(['normal', 'danger'])
};

export default Button;