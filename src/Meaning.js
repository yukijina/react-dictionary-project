import React from 'react';
import './Meaning.css';

export default function Meaning({ meaning }) {
  return (
    <div className='Meaning'>
      <p className='Meaning-part-of-speech'>{meaning.partOfSpeech}</p>
      <p className='Meaning-definition'>{meaning.definition}</p>
    </div>
  );
}
