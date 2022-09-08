import React from 'react';
import AddNote from 'src/components/AddNote';
import ListNote from 'src/components/ListNote';
import Spinner from 'src/components/Spinner';
import { addNote, deleteNote, getActiveNotes } from 'src/data/network-data';

function Home() {
  const [notes, setNotes] = React.useState([]);
  const [title, setTitle] = React.useState('');
  const [body, setBody] = React.useState('');
  const [initializing, setInitializing] = React.useState(true);

  const onTitleInput = (event) => {
    setTitle(event.target.innerText);
  }

  const onBodyInput = (event) => {
    setBody(event.target.innerText);
  }

  const onCreateHandler = async () => {
    await addNote({ title, body });
  }

  const onDeleteHandler = async (id) => {
    await deleteNote(id);
  }

  React.useEffect(() => {
    async function setCurrentActiveNotes() {
      const { error, data } = await getActiveNotes();
      if (!error) {
        setNotes(data);
      }
      setInitializing(false);
    }

    setCurrentActiveNotes();
  }, [notes]);

  if (initializing) {
    return <Spinner />;
  }

  return (
    <React.Fragment>
      <div className="inline-block w-full h-auto">
        <AddNote
          onTitleInput={onTitleInput}
          onBodyInput={onBodyInput}
          onButtonClick={onCreateHandler}
        />
      </div>
      <ListNote notes={notes} onButtonClick={onDeleteHandler} />
    </React.Fragment>
  );
}

export default Home;