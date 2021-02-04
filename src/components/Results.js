import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Results({ location }) {

  console.log(location.state, 'line 11')

  const moviesContainer = document.querySelector('.movies')
  const [results, displayResults] = useState([])

  useEffect(() => {
    if (location.state.select === 'actor') {
      axios.get(`https://api.themoviedb.org/3/search/person?query=${location.state.innerText}&api_key=6be0f587527d60e02a3f3dcf2163bc43`)
      .then(({ data }) => {
        updateResults(data.)
      })
    }

  }, [])

  function displayResults() {
    moviesContainer.innerHTML = movies
      return `<div>
        <h4>${movie.actor}</h4>
        <h6>${movie.genre}</h6>
        <img src="${movie.image}" alt="${movie.name}" />
      </div>`
    }).join('')
  }



}