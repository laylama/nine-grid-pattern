import React, { useState, useEffect } from 'react';
import StickyNote from './components/StickyNote';
import ExportButton from './components/ExportButton';
import './App.css';

function App() {
  const initialNotes = Array(9).fill({ title: '', content: '' });
  const [notes, setNotes] = useState(initialNotes);

  useEffect(() => {
    const handleBeforeUnload = (event) => {
      event.preventDefault();
      event.returnValue = '刷新后将丢失页面信息';
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  function handleAddNote() {
    setNotes([...notes, { title: '', content: '' }]);
  }

  function handleUpdateNote(index, newNote) {
    const updatedNotes = [...notes];
    updatedNotes[index] = newNote;
    setNotes(updatedNotes);
  }

  return (
    <div className="App">
      <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gridGap: '1rem' }}>
        {notes.map((note, index) => (
          <StickyNote
            key={index}
            note={note}
            onUpdate={(newNote) => handleUpdateNote(index, newNote)}
          />
        ))}
      </div>
      <div className="buttons-container">
        <button onClick={handleAddNote}>添加便利贴</button>
        <ExportButton notes={notes} />
      </div>
    </div>
  );
}

export default App;
