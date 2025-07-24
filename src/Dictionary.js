import React, { useState } from 'react';
import './Dictionary.css';

export default function Dictionary() {
  const [keyword, setKeyword] = useState(null);

  function handleChange(e) {
    e.preventDefault();
    setKeyword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(keyword);
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
