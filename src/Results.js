import React from 'react';
import './Results.css';
import Meaning from './Meaning';

export default function Results({ data }) {
  // console.log(data);

  if (Object.keys(data).length !== 0) {
    return (
      <div className='Results'>
        <h2 className='Results-heading--2'>{data.word}</h2>
        <p className='Results-phonetic'>{data.phonetic}</p>
        <div className='Results-meaning-container'>
          {data.meanings.map((meaning, index) => {
            return (
              <div key={index}>
                <Meaning meaning={meaning} />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
