import React, { useState } from 'react';

function StickyNote({ note, onUpdate }) {
  const [title, setTitle] = useState(note.title);
  const [content, setContent] = useState(note.content);

  function handleTitleChange(event) {
    setTitle(event.target.value);
    onUpdate({ title: event.target.value, content });
  }

  function handleContentChange(event) {
    setContent(event.target.value);
    onUpdate({ title, content: event.target.value });
  }

  return (
    <div style={{ backgroundColor: '#fff', borderRadius: '10px', padding: '1rem', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
      <textarea
        className="note-title"
        placeholder="标题"
        defaultValue={note.title}
        onBlur={(event) =>
          onUpdate({ ...note, title: event.target.value })
        }
        onKeyPress={(event) => {
          if (event.key === "Enter") {
            event.preventDefault();
          }
        }}
      />

      <textarea
        value={content}
        onChange={handleContentChange}
        placeholder="内容"
        style={{ width: '100%', height: '100px', resize: 'vertical', border: 'none' }}
      />
    </div>
  );
}

export default StickyNote;

