import { useState  } from 'react';
import './App.css';
import AWS from 'aws-sdk';
import Header from './components/header';
import Section from './components/section';
import AudioPlayer from './components/AudioPlayer';
AWS.config.update({
  accessKeyId: process.env.REACT_APP_CLIENTID,
  secretAccessKey: process.env.REACT_APP_SECRETKEY,
  region: process.env.REACT_APP_REGION
})

const polly = new AWS.Polly()

function App() {

  const [text, setText] = useState('');
  const [audioFile, setAudioFile] = useState('');



  
  const convertTextToSpeech = (selectedVoice) => {
    polly.synthesizeSpeech(
      {
        Text: text,
        OutputFormat: 'mp3',
        VoiceId: selectedVoice, // Use the selected voice
      },
      (error, data) => {
        if (error) {
          console.log(error);
        } else {
          console.log(data);
          setAudioFile(data);
        }
      }
    );
  };
  return (  
    <>
    <div className='container'>
      <Header /> 
      </div>

      <Section text={text} setText={setText} convertTextToSpeech={convertTextToSpeech} />
 
    <AudioPlayer audioFile={audioFile}/>
    </>
    
  );
}

export default App;