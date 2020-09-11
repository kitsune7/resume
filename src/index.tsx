import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import Resume from './Resume/Resume'

ReactDOM.render(
  <Router>
    <Resume />
  </Router>,
  document.getElementById('app')
)
