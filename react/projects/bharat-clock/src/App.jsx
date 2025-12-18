import React from 'react'
import Header from './components/Header'
import Bharatp from './components/Bharatp'
import Time from './components/Time'
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"

const App = () => {
  return (
    <>
    <center>
    <Header/>
    <Bharatp/>
    <Time/>
    </center>
    </>
  )
}

export default App