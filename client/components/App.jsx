import React from "react"

import {HashRouter as Router, Route} from 'react-router-dom'

import Form from './Form'
import Het from './Het'
//lewis
import Kanye from "./Kanye"
import Cammy from "./Cammy"


const App = () => {
  return (
    <Router>
    <div className="container">
    <Route path='/kanye/' component={Kanye}/>
    <Route path='/' component={Cammy}/>
    <Route path='/het/' component={Het}/>
    </div>
    </Router> 
  )
}

export default App
