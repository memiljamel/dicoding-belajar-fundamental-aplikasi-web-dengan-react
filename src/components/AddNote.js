import PropTypes from 'prop-types';
import Button from 'src/components/Button';
import { ReactComponent as MdPushPin } from 'src/assets/icons/push_pin_black_24dp.svg';
import { ReactComponent as MDPushedPin } from 'src/assets/icons/pushed_pin_black_24dp.svg';

function AddNote({ onInputTitle, onInputBody, onClickArchive, onClickCreate, isArchived = false }) {
  return (
    <div className="w-full max-w-[600px] h-auto p-0 my-4 mx-auto bg-white border border-[#dadce0] rounded-lg shadow-04dp overflow-hidden">
      <div className="overflow-hidden relative">
        <div className="min-h-[48px] px-4 py-3 mr-12 font-Roboto font-medium text-base text-black/[0.87] outline-none whitespace-pre-wrap break-words empty:before:content-[attr(data-placeholder)] before:font-medium before:text-black/[0.60]" contentEditable={true} role="textbox" data-placeholder="Judul" aria-label="Buat catatan..." tabIndex={0} spellCheck={true} onInput={onInputTitle}></div>
        <button className="block w-8 h-8 p-1 m-2 bg-transparent rounded-full border-0 hover:bg-slate-200 focus:bg-slate-200 text-black/[0.60] absolute top-0 right-0 outline-none" onClick={onClickArchive} type="button" aria-label="archive">
          { isArchived
            ? <MDPushedPin />
            : <MdPushPin />
          }
        </button>
      </div>
      <div className="overflow-hidden relative">
        <div className="min-h-[48px] px-4 py-[14px] m-0 font-Roboto font-normal text-sm text-black/[0.87] outline-none whitespace-pre-wrap break-words empty:before:content-[attr(data-placeholder)] before:font-medium before:text-black/[0.60]" contentEditable={true} role="textbox" data-placeholder="Buat catatan..." aria-label="Buat catatan..." tabIndex={0} spellCheck={true} onInput={onInputBody}></div>
      </div>
      <div className="w-full h-auto px-4 py-2 m-0 text-right">
        <Button onClick={onClickCreate} type="button" text="Simpan" />
      </div>
    </div>
  );
}

AddNote.propTypes = {
  onInputTitle: PropTypes.func.isRequired,
  onInputBody: PropTypes.func.isRequired,
  onClickArchive: PropTypes.func.isRequired,
  onClickCreate: PropTypes.func.isRequired,
  isArchived: PropTypes.bool,
};

export default AddNote;