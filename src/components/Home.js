import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function Home() {

  const [inputText, updateInputText] = useState('')
  const [select, updateSelect] = useState(['Actor', 'Film', 'Genre'])
  console.log(inputText)
  console.log(select)
  
  return <div>
    <div>
      {/* <select onChange={(event) => updateSelect(event.target.value)}
      >
        <option value="Actor">Actor</option>
        <option value="Film">Film</option>
        <option value="Genre">Genre</option>
      </select> */}
      <div>
        <input
          placeholder="Enter your movie..."
          type="text"
          onChange={(event) => updateInputText(event.target.value)}
          value={inputText}
        />
        <Link className="button is-outlined is-rounded"
          to={{
            pathname: '/results',
            state: {
              select,
              inputText
            }
          }}>
          Search!
        </Link>
      </div>
    </div>
  </div>
}

