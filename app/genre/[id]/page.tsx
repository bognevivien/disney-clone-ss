import React from 'react'

type Props = {
    params:{
        id: string;
    };
    searchParams:{
        genre: string;
    }
}

function GenrePage({params: {id}, searchParams:{genre}}:Props) {
  return (
    <div>Welcome to the id {id} of the genre {genre} </div>
  )
}

export default GenrePage