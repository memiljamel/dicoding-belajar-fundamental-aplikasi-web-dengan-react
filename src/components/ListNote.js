import PropTypes from 'prop-types';
import ItemNote from 'src/components/ItemNote';

function ListNote({ notes, onClickDelete }) {
  if (!notes.length) {
    return (
      <div className="inline-block w-full h-auto">
        <div className="w-full h-auto p-0 my-4 mx-auto text-center">
          <div className="h-[156px] p-0 m-0 bg-no-data bg-contain bg-no-repeat bg-center"></div>
          <span className="block font-Roboto font-normal text-black/[0.60] text-sm text-ellipsis whitespace-nowrap overflow-hidden">Tidak ada catatan</span>
        </div>
      </div>
    );
  }

  return notes.map((note, index) => (
    <div className="inline-block w-full h-auto" key={index}>
      <ItemNote 
        id={note.id}
        title={note.title}
        body={note.body}
        createdAt={note.createdAt}
        onClickDelete={() => onClickDelete(note.id)}
      />
    </div>
  ));
}

ListNote.propTypes = {
  notes: PropTypes.array.isRequired,
  onClickDelete: PropTypes.func.isRequired,
};

export default ListNote;