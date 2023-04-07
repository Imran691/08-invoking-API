// we will create this page statically i.e. we will create and store this page at build time. after deployment whenever a new user opens this page, the API will not be recalled it will only be called once.
// here we have to display books data on our page.
// for that we have to call books API, collect response and display the data on our page. (3 things to be done)

// to request data from an API we have to create an async function
// we don't need any parameters because we don't have to send any additional info with our request (only URL)
// we need to send a request to an API whenever this function is run, For that we use "fetch"
// in fetch we send request information. and we can pass URL for that.
// data returned is in the JSON format
// fetch returns a promise, we need to wait for its response. So we use "await". that's why we have created "async" function.
// we store this response in a variable "const response"

//after collecting data in  "const book" we have to render this data in our <div>
//this data is in the from of array. so we need to perform "map" function on this array. in this way we can look at each book individually in each iteration.

// now if we run "npm run build", it will show "static" page with and outlined bullet and "automatically rendered as static HTML (uses no initial props)"
// this means this is statically built page that was created at build time.

//by default Next.js renders static page.



import { type } from 'os';
import React from 'react'

type Book = {
  id: number,
  name: string,
  type: string,
  availabe:boolean,
}
async function getBooks() {
  const response =await  fetch("https://simple-books-api.glitch.me/books") //we want to fetch data from this URL
  const data = response.json(); //to make the dsta usable
  return data;
}

export default async function StaticPage  ()  {
  const books = await getBooks() // we will have all the data returned by API stored in this variable. we can see this data in console.log(books)
  // console.log(books);
  
  return (
    <div>
      <h1>Static Page</h1>
      {books.map( (book:Book) => (
        <ul>
          <li key={book.id}>{book.name} - {book.type} - {book.availabe}</li>
        </ul>
      ))}
    </div>
  )
}
