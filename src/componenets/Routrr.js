import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link
  } from "react-router-dom";


//   this router v5 sample
function Routrr() {
    return (
        <div>
            <Router>
                <Link to='/home'>Home Page</Link> <br />
                <Link to='/about'>About page</Link>
                <Route path='/home'><Home/></Route>
                <Route path='/about'><About/></Route>
            </Router>
        </div>
    )
}

function Home(params) {
    return(
        <div>
            <h1>Home pagee</h1>
        </div>
    )
}

function About(params) {
    return(
        <div>
            <h1>About pagee</h1>
        </div>
    )
}

export default Routrr
