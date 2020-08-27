import React from "react"
// lewis
import {HashRouter as Router, Route} from 'react-router-dom'

import Form from './Form'
import Het from './Het'
//lewis
import Kanye from './Kanye'
import Cammy from "./Cammy"

const App = () => {
  return (
    <Router>
    <div className="container">
      {/* <h1>React development has begun!</h1> */}
      <button className="btn">Press Me!</button>
      </div>
      <Route path='/het/' component={Het}/>
    </Router>
  )
}

export default App
