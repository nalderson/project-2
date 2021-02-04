import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function Home() {

  const [inputText, updateInputText] = useState('')

  return <div className="hero is-danger is-fullheight">
    <div className="hero-body">
      <div className="">
        <p className="title">
          Fullheight hero
        </p>
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
  </div>
}

