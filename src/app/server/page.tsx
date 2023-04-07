//this page will render data dynamically, i.e. every time a user visits the page, API will be called, API will fetch data from the server will render this data.
// for this we add an additional parameter with the API URL in the form of an object {cache: "no-store"}
// now if we run "npm run build", it will show "static" page with Lambda and "server-side renders at runtime (uses getInitialProps or getServerSideProps)"

import { type } from 'os';
import React from 'react'

type Book = {
  id: number,
  name: string,
  type: string,
  availabe:boolean,
}
async function getBooks() {
  const response =await  fetch("https://simple-books-api.glitch.me/books", {cache: 'no-store'}) //to fetch data from this URL
  const data = response.json(); //to make the data usable
  return data;
}

export default async function DynamicPage  ()  {
  const books = await getBooks() 
  return (
    <div>
      <h1>Dynamic Page</h1>
      {books.map( (book:Book) => (
        <ul>
          <li key={book.id}>{book.name} - {book.type} - {book.availabe}</li>
        </ul>
      ))}
    </div>
  )
}
