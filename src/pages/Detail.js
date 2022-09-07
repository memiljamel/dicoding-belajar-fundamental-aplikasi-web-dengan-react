import React from 'react';
import { useParams } from 'react-router-dom';
import parse from 'html-react-parser';
import { getNote } from 'src/data/notes';
import { showFormattedDate } from 'src/utils/formatted-date';

function Detail() {
  const { id } = useParams();

  const [note, setNote] = React.useState(getNote(id));

  if (!note) {
    return (
      <div className="inline-block w-full h-auto">
        <div className="w-full h-auto p-0 my-4 mx-auto text-center">
          <div className="h-[156px] p-0 m-0 bg-no-data bg-contain bg-no-repeat bg-center"></div>
          <span className="block font-Roboto font-normal text-black/[0.60] text-sm text-ellipsis whitespace-nowrap overflow-hidden">Catatan tidak ditemukan</span>
        </div>
      </div>
    );
  }

  return (
    <div className="inline-block w-full h-auto">
      <div className="w-full max-w-[600px] h-auto p-0 my-4 mx-auto bg-white border border-[#dadce0] rounded-lg hover:shadow-04dp overflow-hidden">
        <div className="overflow-hidden relative">
          <div className="min-h-[48px] px-4 py-3 m-0 font-Roboto font-medium text-base text-black/[0.87] outline-none whitespace-pre-wrap break-words">{parse(note.title)}</div>
        </div>
        <div className="overflow-hidden relative">
          <div className="min-h-[48px] px-4 py-[14px] m-0 font-Roboto font-normal text-sm text-black/[0.87] outline-none whitespace-pre-wrap break-words">{parse(note.body)}</div>
        </div>
        <div className="flex items-center justify-between gap-4 w-full h-auto px-4 py-2 m-0">
          <div className="flex-1 overflow-hidden relative">
            <span className="block font-Roboto font-normal text-black/[0.60] text-sm text-ellipsis whitespace-nowrap overflow-hidden">{showFormattedDate(note.createdAt)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;