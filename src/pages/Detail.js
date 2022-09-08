import React from 'react';
import { useParams } from 'react-router-dom';
import parse from 'html-react-parser';
import Spinner from 'src/components/Spinner';
import { showFormattedDate } from 'src/utils/formatted-date';
import { getNote } from 'src/data/network-data';

function Detail() {
  const { id } = useParams();

  const [note, setNote] = React.useState({
    title: '',
    body: '',
    createdAt: null,
  });
  const { title, body, createdAt } = note;

  const [initializing, setInitializing] = React.useState(true);

  React.useEffect(() => {
    async function setCurrentNote(id) {
      const { error, data } = await getNote(id);
      if (!error) {
        setNote(data);
      }
      setInitializing(false);
    }

    setCurrentNote(id);
  }, [note]);

  if (initializing) {
    return <Spinner />
  }

  if (Object.values(note).every(x => x === null || x === '')) {
    return (
      <div className="inline-block w-full h-auto">
        <div className="w-full h-auto p-0 my-4 mx-auto text-center">
          <div className="h-[156px] p-0 m-0 bg-no-data bg-contain bg-no-repeat bg-center"></div>
          <span className="block font-Roboto font-normal text-slate-900 text-sm text-ellipsis whitespace-nowrap overflow-hidden dark:text-slate-400">Catatan tidak ditemukan</span>
        </div>
      </div>
    );
  }

  return (
    <div className="inline-block w-full h-auto">
      <div className="w-full max-w-[600px] h-auto p-0 my-4 mx-auto bg-white border border-slate-900/10 rounded-lg hover:shadow-04dp overflow-hidden dark:bg-slate-800">
        <div className="overflow-hidden relative">
          <div className="min-h-[48px] px-4 py-3 m-0 font-Roboto font-medium text-base text-slate-900 outline-none whitespace-pre-wrap break-words dark:text-slate-400">{parse(title)}</div>
        </div>
        <div className="overflow-hidden relative">
          <div className="min-h-[48px] px-4 py-[14px] m-0 font-Roboto font-normal text-sm text-slate-900 outline-none whitespace-pre-wrap break-words dark:text-slate-400">{parse(body)}</div>
        </div>
        <div className="flex items-center justify-between gap-4 w-full h-auto px-4 py-2 m-0">
          <div className="flex-1 overflow-hidden relative">
            <span className="block font-Roboto font-normal text-slate-600 text-sm text-ellipsis whitespace-nowrap overflow-hidden dark:text-slate-200">{showFormattedDate(createdAt)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;