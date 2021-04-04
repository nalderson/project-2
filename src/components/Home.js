import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Slider from 'react-slick'
import axios from 'axios'

export default function Home() {
  const [popular, updatePopular] = useState([])

  var settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 7,
    slidesToScroll: 7,
    autoplay: true
  }

  const [inputText, updateInputText] = useState('')
  const sliderStyle = {
    width: '100vw',
    height: '25%',
    position: 'fixed',
    bottom: '0',
    'background-color': 'hsl(348, 100%, 61%)'
  }

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.apikey}&language=en-US&page=1`)
      .then(({ data }) => {
        updatePopular(data.results)
        console.log(data.results)
      })

  }, [])


  return <div className="hero is-danger is-fullheight">
    <div className="hero-body is-justify-content-center">
      <div className="has-text-centered ">
        <p className="title is-size-1">
          <h2>FILM FINDER</h2>
        </p>
        <div className="field has-addons has-addons-centered ">
          <div className="control">
            <input className="input is-rounded is-block"
              placeholder="Enter your movie..."
              type="text"
              onChange={(event) => updateInputText(event.target.value)}
              value={inputText}
            />
          </div>
          <div className="control">
            <Link className="button is-outlined is-rounded is-right is-block"
              to={{
                pathname: '/project-2/results',
                state: { inputText }
              }}>
              Search
            </Link>
          </div>
        </div>
      </div>
      <Slider {...settings} style={sliderStyle}>
        {popular.map(result => {
          return <Link to={{ pathname: '/project-2/popular' }}
            className="popular-movies" key={popular.id}>
            <img src={`https://image.tmdb.org/t/p/original/${result.poster_path}`} alt={popular.name} />
          </Link>
        })}
      </Slider>
    </div>
    <footer className="footer"></footer>
  </div>
}