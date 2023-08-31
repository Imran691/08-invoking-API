// we will fetch data in parallel 
// for this we create two functions one for fiction and other for nonfiction books. and will call these functions in parallel.
//here will are going to render these dynamically from the server.

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


export default async function Parallel() {
    
    const fictionBooks = getFiction();
    const nonFictionBooks = getNonfiction();

    //above functions are async but we haven't used await to call these functions
    // for that we add following line
    // added both function in same promise for parallel rendering
    const[fiction, nonFiction] = await Promise.all([
        fictionBooks,
        nonFictionBooks
    ])
  return (
    <div>
        <h1>Fiction Books</h1>
        <ul>
            {fiction.map( (book:Book) => (
                <li key={book.id}>{book.name}</li>
            ))}
        </ul>

        <h1>Non-Fiction Books</h1>
        <ul>
            {nonFiction.map( (book:Book) => (
                <li key={book.id}>{book.name}</li>
            ))}
        </ul>
    </div>
  )
}
