import React from 'react';
import './Synonyms.css';

export default function Synonyms({ synonyms }) {
  if (synonyms) {
    return (
      <section className='Synonyms'>
        <h4>Synonyms</h4>
        <ul>
          {synonyms.map((synonym, i) => {
            return <li key={i}>{synonym}</li>;
          })}
        </ul>
      </section>
    );
  }
}
