// we will fetch data in sequence
// we will not use promise.all for this

import React from 'react'

type Book = {
    id: number,
    name: string,
    type: string,
    available:boolean,
  }

async function getFiction() {
    const response =await  fetch("https://simple-books-api.glitch.me/books?type=fiction", {cache: 'no-store'}) //to fetch data from this URL
    const data = response.json(); //to make the data usable
    return data;
  }

  async function getNonfiction() {
    const response =await  fetch("https://simple-books-api.glitch.me/books?type=non-fiction", {cache: 'no-store'}) //to fetch data from this URL
    const data = response.json(); //to make the data usable
    return data;
  }


export default async function Sequential() {
    
    const fictionBooks = await getFiction();
    const nonFictionBooks = await getNonfiction();

   
  return (
    <div>
        <h1>Fiction Books</h1>
        <ul>
            {fictionBooks.map( (book:Book) => (
                <li key={book.id}>{book.name}</li>
            ))}
        </ul>

        <h1>Non-Fiction Books</h1>
        <ul>
            {nonFictionBooks.map( (book:Book) => (
                <li key={book.id}>{book.name}</li>
            ))}
        </ul>
    </div>
  )
}
