import React from 'react';
import PropTypes from 'prop-types';
import Button from 'src/components/Button';
import LocaleContext from 'src/context/LocaleContext';
import { home } from 'src/utils/content';

function AddNote({ onTitleInput, onBodyInput, onButtonClick }) {
  const { locale } = React.useContext(LocaleContext);

  return (
    <div className="w-full max-w-[600px] h-auto p-0 my-4 mx-auto bg-white rounded-lg shadow-04dp overflow-hidden dark:bg-slate-800">
      <div className="overflow-hidden relative">
        <div className="min-h-[48px] px-4 py-3 m-0 font-Roboto font-medium text-base text-slate-900 outline-none whitespace-pre-wrap break-words empty:before:content-[attr(data-placeholder)] before:font-medium before:text-black/[0.60] dark:text-slate-400 dark:before:text-slate-400" contentEditable={true} role="textbox" data-placeholder={home[locale].title} aria-label={home[locale].title} tabIndex={0} spellCheck={true} onInput={onTitleInput}></div>
      </div>
      <div className="overflow-hidden relative">
        <div className="min-h-[48px] px-4 py-[14px] m-0 font-Roboto font-normal text-sm text-slate-900 outline-none whitespace-pre-wrap break-words empty:before:content-[attr(data-placeholder)] before:font-medium before:text-black/[0.60] dark:text-slate-400 dark:before:text-slate-400" contentEditable={true} role="textbox" data-placeholder={home[locale].body} aria-label={home[locale].body} tabIndex={0} spellCheck={true} onInput={onBodyInput}></div>
      </div>
      <div className="w-full h-auto px-4 py-2 m-0 text-right">
        <Button onButtonClick={onButtonClick} type="button" text={home[locale].create} />
      </div>
    </div>
  );
}

AddNote.propTypes = {
  onTitleInput: PropTypes.func.isRequired,
  onBodyInput: PropTypes.func.isRequired,
  onButtonClick: PropTypes.func.isRequired,
};

export default AddNote;
