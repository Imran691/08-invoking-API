// API will be called but at client side, not only at build time
// To call API on client side we install "SWR" library. "npm i swr" and can use it to fetch data on client side.
// when we use SWR we use fetcher function.
// we can use fetch API.
// but to render the data we use "useSWR" variable in JSX.

//data returned by useSWR() has 3 things that we need, actual data, loading state and error (if any).
//we get this data by using destructuring.

"use client"; //to render page at client

import { type } from "os";
import React from "react";
import useSWR from "swr";

const url = "https://api.quotable.io/random?tags=technology";

const fecther = (url: string) => fetch(url).then((res) => res.json());

export default function ClientPage() {
  // to call the API that returns the data
  const { data, error, isLoading } = useSWR(url, fecther);
  if (error) return <div>Error</div>;
  if (isLoading)
    return (
      <div>
        <h1>Client Page</h1>
        Loading data
      </div>
    );
  return (
    <div>
      <h1>Client Page</h1>
      {data.content}
    </div>
  );
}
