import React from 'react';
import AddNote from 'src/components/AddNote';
import ListNote from 'src/components/ListNote';
import { addNote, deleteNote, getAllNotes } from 'src/data/notes';

function Home() {
  const [notes, setNotes] = React.useState(() => getAllNotes());
  const [title, setTitle] = React.useState('');
  const [body, setBody] = React.useState('');
  const [isArchived, setArchived] = React.useState(false);

  const onInputTitleHandler = (event) => {
    setTitle(event.target.innerText);
  }

  const onInputBodyHandler = (event) => {
    setBody(event.target.innerText);
  }

  const onClickArchiveHandler = () => {
    setArchived(!isArchived);
  }

  const onClickCreateHandler = () => {
    addNote({ title, body, isArchived });
    setNotes(getAllNotes());
  }

  const onClickDeleteHandler = (id) => {
    deleteNote(id);
    setNotes(getAllNotes());
  }

  return (
    <React.Fragment>
      <div className="inline-block w-full h-auto">
        <AddNote
          onInputTitle={onInputTitleHandler}
          onInputBody={onInputBodyHandler}
          onClickArchive={onClickArchiveHandler}
          onClickCreate={onClickCreateHandler}
          isArchived={isArchived}
        />
      </div>
      <ListNote notes={notes} onClickDelete={onClickDeleteHandler} />
    </React.Fragment>
  );
}

export default Home;