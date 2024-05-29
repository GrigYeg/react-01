import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function Book({ book_name, author_name, genre, page_count, reviews }) {
  return (
    <div>
      <h2>Book: {book_name}</h2>
      <h3>Author: {author_name}</h3>
      <h3>Genre: {genre}</h3>
      <h3>Page count: {page_count}</h3>
      <div>
        <h3>Reviews:</h3>
        <ul>
          {reviews.map((review, index) => (
            <li key={index}>{review.text}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default Book