import React from 'react';
import { Link } from 'react-router-dom';
export default function Cocktail({ id, authorName, type, title, content }) {
  return (
    <article className='cocktail'>
      <div className='img-container'></div>
      <div className='cocktail-footer'>
        <h3>
          {id} - {title}
        </h3>
        <h4>{authorName}</h4>
        <p>{content}</p>
        <Link to={`/cocktail/${id}`} className='btn btn-primary btn-details'>
          details
        </Link>
      </div>
    </article>
  );
}
