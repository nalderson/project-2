import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Results({ location }) {

  console.log(location.state, 'line 11')

  const [loading, updateLoading] = useState(true)
  const [results, updateResults] = useState([])

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/search/movie?query=${location.state.inputText}&api_key=6be0f587527d60e02a3f3dcf2163bc43`)
      .then(({ data }) => {
        updateResults(data.results)
        updateLoading(false)
        console.log(data.results)
      })

  }, [])

  return <div className="cards">
    {results.map(result => {
      return <div className="card" key={result.id}>
        <img className="card-front" src={`https://image.tmdb.org/t/p/original/${result.poster_path}`} alt={result.name} />
        <div className="card-inner">
          <div className="card-back">
            <h1>{result.original_title}</h1>
            <h5>{result.release_date}</h5>
            <p>{result.overview}</p>
          </div>
        </div>
      </div>
    })}
  </div >

}

