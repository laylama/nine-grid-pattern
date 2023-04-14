import React, { useState } from 'react';

function TopicInput({ onTopicChange }) {
  const [topic, setTopic] = useState('');

  function handleChange(event) {
    const newTopic = event.target.value;
    setTopic(newTopic);
    onTopicChange(newTopic);
  }

  return (
    <div>
      <label htmlFor="topic">主题：</label>
      <input
        type="text"
        id="topic"
        value={topic}
        onChange={handleChange}
      />
    </div>
  );
}

export default TopicInput;
