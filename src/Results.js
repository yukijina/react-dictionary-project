import React from 'react';
import './Results.css';

export default function Results({ data }) {
  // console.log(data);

  if (Object.keys(data).length !== 0) {
    return (
      <div className='Results'>
        <h2 className='Results-heading--2'>{data.word}</h2>
        <p className='Results-phonetic'>{data.phonetic}</p>
        <div className='Results-result-container'>
          {data.meanings.map((meaning, index) => {
            return (
              <div key={index} className='Results-result-container--indivisual'>
                <p className='Results-part-of-speech'>{meaning.partOfSpeech}</p>
                <p className='Results-definition'>{meaning.definition}</p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
