import { Link } from 'react-router-dom';
import parse from 'html-react-parser';
import PropTypes from 'prop-types';
import Button from 'src/components/Button';
import { showFormattedDate } from 'src/utils/formatted-date';

function ItemNote({ id, title, body, createdAt, onClickDelete }) {
  return (
    <div className="w-full max-w-[600px] h-auto p-0 my-4 mx-auto bg-white border border-[#dadce0] rounded-lg hover:shadow-04dp overflow-hidden">
      <div className="overflow-hidden relative">
        <div className="min-h-[48px] px-4 py-3 m-0 font-Roboto font-medium text-base text-black/[0.87] outline-none whitespace-pre-wrap break-words">
          <Link className="no-underline hover:underline" to={`/detail/${id}`}>{parse(title)}</Link>
        </div>
      </div>
      <div className="overflow-hidden relative">
        <div className="min-h-[48px] px-4 py-[14px] m-0 font-Roboto font-normal text-sm text-black/[0.87] outline-none whitespace-pre-wrap break-words">{parse(body)}</div>
      </div>
      <div className="flex items-center justify-between gap-4 w-full h-auto px-4 py-2 m-0">
        <div className="flex-1 overflow-hidden relative">
          <span className="block font-Roboto font-normal text-black/[0.60] text-sm text-ellipsis whitespace-nowrap overflow-hidden">{showFormattedDate(createdAt)}</span>
        </div>
        <div className="overflow-hidden relative">
          <Button onClick={onClickDelete} type="button" text="Hapus" color="danger" />
        </div>
      </div>
    </div>
  );
}

ItemNote.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  onClickDelete: PropTypes.func.isRequired,
};

export default ItemNote;