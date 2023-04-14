import React from 'react';

function ExportButton({ notes }) {
  function handleCopyToClipboard() {
    const textToCopy = notes.map(note => `${note.title}\n${note.content}`).join('\n');
    
    navigator.clipboard.writeText(textToCopy)
      .then(() => {
        alert('便利贴内容已复制到剪贴板！');
      })
      .catch(err => {
        console.error('无法复制文本: ', err);
        alert('复制失败，请手动复制内容。');
      });
  }

  return (
    <button onClick={handleCopyToClipboard}>
      复制到剪贴板
    </button>
  );
}

export default ExportButton;
