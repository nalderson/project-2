import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Slider from 'react-slick'
import axios from 'axios'

export default function Home() {
  const [popular, updatePopular] = useState([])
  const [loading, updateLoading] = useState(true)

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 7,
    autoplay: true
  }

  const [inputText, updateInputText] = useState('')
  const sliderStyle = {
    width: '100vw',
    height: '25%',
    position: 'fixed',
    bottom: '0'
  }


  useEffect(() => {
    axios.get('https://api.themoviedb.org/3/movie/popular?api_key=6be0f587527d60e02a3f3dcf2163bc43&language=en-US&page=1')
      .then(({ data }) => {
        updatePopular(data.results)
        updateLoading(false)
        console.log(data.results)
      })

  }, [])


  return <div className="hero is-danger is-fullheight ">
    <div className="hero-body is-justify-content-center">
      <div className="has-text-centered ">
        <p className="title is-size-1">
          Fullheight hero
        </p>
        <div className="is-flex-direction-row">
          <input className="input is-rounded"
            placeholder="Enter your movie..."
            type="text"
            onChange={(event) => updateInputText(event.target.value)}
            value={inputText}
          />
          <Link className="button is-outlined is-rounded"
            to={{
              pathname: '/results',
              state: { inputText }
            }}>
            Search!
          </Link>
        </div>
      </div>
      <Slider {...settings} style={sliderStyle}>
        {popular.map(result => {
          console.log(popular.poster_path, 'line: 39')
          return <Link to={{ pathname: '/popular' }}
            className="popular-movies" key={popular.id}>
            <img src={`https://image.tmdb.org/t/p/original/${result.poster_path}`} alt={popular.name} />
          </Link>
        })}
      </Slider>
    </div>
  </div>

}