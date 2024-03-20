import '../App.css';
import { useState } from 'react';

const Section = ({ text, setText, convertTextToSpeech }) => {
  // State variable for selected voice
  const [selectedVoice, setSelectedVoice] = useState('Joanna');

  // Function to handle voice selection change
  const handleVoiceChange = (event) => {
    setSelectedVoice(event.target.value);
  };

  return (
    <div className="section-container">

    <div className="voice-selection">
        <p>Choose your voice:</p>
        {/* Dropdown box for selecting voices */}
        <select value={selectedVoice} onChange={handleVoiceChange}>
          <option value="Joanna">Joanna</option>
          <option value="Matthew">Matthew</option>
          <option value="Amy">Amy</option>
          <option value="Emma">Emma</option>
         <option value="Brian">Brian</option>
          {/* Add more options for other voices as needed */}
        </select>
      </div>

      {/* Textarea for entering text */}
      <textarea value={text} onChange={(e) => setText(e.target.value)} />
      {/* Button to convert text to speech */}
      <button className='btn-convert' onClick={() => convertTextToSpeech(selectedVoice)}>Convert to speech</button>
      <button className='btn-clr' onClick={() => setText('')}>Clear</button>

    </div>
  );
}

export default Section;



