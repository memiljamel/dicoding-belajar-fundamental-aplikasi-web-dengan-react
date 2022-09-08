import React from 'react';
import PropTypes from 'prop-types';

function TextField({ text, name, type = 'text', message, value, onValueChange }) {
  return (
    <React.Fragment>
      <label className="block p-0 mb-2 font-Roboto font-medium text-sm text-slate-600 text-ellipsis whitespace-nowrap overflow-hidden dark:text-slate-400" htmlFor={name}>{text}</label>
      <input type={type} className="block w-full h-10 px-3 py-2 m-0 bg-white border border-slate-900/10 rounded font-Roboto font-normal text-base text-slate-600 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 dark:bg-slate-700 dark:text-slate-400 peer" id={name} name={name} value={value} onChange={onValueChange} />
      <p className="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">{message}</p>
    </React.Fragment>
  );
}

TextField.propTypes = {
  text: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['text', 'email', 'number', 'date', 'datetime-local', 'month', 'password', 'search', 'tel', 'search', 'url', 'week']),
  value: PropTypes.string.isRequired,
  onValueChange: PropTypes.func.isRequired,
  message: PropTypes.string,
};

export default TextField;