import React, { useState } from 'react';
import axios from 'axios';
import './Dictionary.css';

export default function Dictionary() {
  const [keyword, setKeyword] = useState(null);
  const [data, setData] = useState({});
  const apiKey = '2f5896dd4cc0cdo340203tba4fba205f';
  const url = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;

  function handleResult(response) {
    // console.log(response.data);
    const result = response.data;
    setData({
      word: result.word,
      phonetic: result.phonetic,
      meanings: result.meanings,
    });
  }

  function handleChange(e) {
    e.preventDefault();
    setKeyword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    axios.get(url).then(handleResult);
  }

  return (
    <div className='Dictionary'>
      <form className='Dictionary-form' onSubmit={handleSubmit}>
        <input type='search' onChange={handleChange} />
        <input type='submit' value='Search' />
      </form>
    </div>
  );
}
