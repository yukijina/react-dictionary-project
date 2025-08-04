import React, { useState } from 'react';
import axios from 'axios';
import './Dictionary.css';
import Results from './Results';
import Image from './Image';

export default function Dictionary() {
  const [keyword, setKeyword] = useState(null);
  const [data, setData] = useState({});
  const [imageData, setImageData] = useState([]);
  const apiKey = '2f5896dd4cc0cdo340203tba4fba205f';
  const url = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
  const imageUrl = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=${apiKey}`;

  function handleDictionary(response) {
    // console.log(response.data);
    const result = response.data;
    setData({
      word: result.word,
      phonetic: result.phonetic,
      meanings: result.meanings,
    });
  }

  function handleImages(response) {
    setImageData(response.data.photos);
  }

  function handleChange(e) {
    e.preventDefault();
    setKeyword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    axios.get(url).then(handleDictionary);
    axios.get(imageUrl).then(handleImages);
  }

  return (
    <div className='Dictionary'>
      <form className='Dictionary-form' onSubmit={handleSubmit}>
        <input type='search' onChange={handleChange} />
        <input type='submit' value='Search' />
      </form>
      <Results data={data} />
      <Image imageData={imageData} />
    </div>
  );
}
