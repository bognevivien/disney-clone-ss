import React from 'react'

function GenreDropdown() {
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${process.env.TMDB_API_KEY}`
        }
      };

      const url = 'https://api.themoviedb.org/3/genre/tv/list?language=en'
      return (
    <div>GenreDropdown</div>
  )
}

export default GenreDropdown