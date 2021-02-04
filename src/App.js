import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import Results from './components/Results'
import Navbar from './components/Navbar'

import './styles/style.scss'
import 'bulma'

const App = () => {
  return <BrowserRouter>
    <Navbar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/results" component={Results} />
    </Switch>
  </BrowserRouter>

}
export default App