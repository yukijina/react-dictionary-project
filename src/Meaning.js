import React from 'react';
import './Meaning.css';
import Synonyms from './Synonyms';

export default function Meaning({ meaning, index }) {
  return (
    <div className='Meaning'>
      <section className='Meaning-section'>
        <h3 className='Meaning-part-of-speech'>
          {index + 1}. {meaning.partOfSpeech}
        </h3>
        <p className='Meaning-definition'>{meaning.definition}</p>
      </section>
      <Synonyms synonyms={meaning.synonyms} />
    </div>
  );
}
