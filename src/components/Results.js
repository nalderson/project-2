import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

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

  return <div className="movie-container">
    {results.map(result => {
      return <div key={result.id}>
        <h1>{result.original_title}</h1>
        <h5>{result.release_date}</h5>
        <p>{result.overview}</p>
        <img src={`https://image.tmdb.org/t/p/original/${result.poster_path}`} alt={result.name}/>
      </div>
    })}
  </div >




}


// { results: { known_for: { original_title } } }

        // return <Link key={result.id} to={{
        //   pathname: `/results/${result.id}`,
        //   state: {
        //     name: result.original_title,
        //     // image: result.results.poster_path,
        //     release: result.release_date,
        //     overview: result.overview
        //   }
        // }}>