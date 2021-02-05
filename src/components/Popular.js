import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Popular() {

  const [results, updateResults] = useState([])

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.apikey}&language=en-US&page=1`)
      .then(({ data }) => {
        updateResults(data.results)
      })

  }, [])

  return <div className="cards">
    {results.map(result => {
      return <div className="card" key={result.id}>
        <img className="card-front" src={`https://image.tmdb.org/t/p/original/${result.poster_path}`} alt={result.name} />
        <div className="card-inner">
          <div className="card-back">
            <h1>{result.original_title}</h1>
            <h5>Release Date: {result.release_date}</h5>
            <p>{result.overview}</p>
          </div>
        </div>
      </div>
    })}
  </div >

}

