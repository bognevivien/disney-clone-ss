import { notFound } from 'next/navigation';
import React from 'react'

type Props = {
    params:{
        term: string;
    };
}

function SearchPage({params: {term}}:Props) {

    if (!term) notFound();

    const termToUse = decodeURI(term)

    // API Call to get te searched movies
    // API Call to get the Popular Movies
    
  return (
    <div>Welcome to the seach page SearchPage {termToUse}</div>
  )
}

export default SearchPage