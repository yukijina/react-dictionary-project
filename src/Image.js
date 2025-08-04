import React from 'react';
import './Image.css';

export default function Image({ imageData }) {
  if (imageData.length !== 0) {
    return (
      <section className='Image'>
        {imageData.map((data, i) => {
          return (
            <div className='Image-wrapper' key={i}>
              <a
                href={data.src.original}
                target='_blank'
                rel='noopener noreferrer'
              >
                <img
                  src={data.src.original}
                  alt={data.alt}
                  className='Image-img'
                />
              </a>
            </div>
          );
        })}
      </section>
    );
  }
}
