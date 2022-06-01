import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Nestedroute() {
    return (
        <div>
            <h1>Hello its main page</h1>
            <Link to={'lalu'}>lalu</Link> <br />
            <Link to={'walu'}>walu</Link> <br />
            <Link to={'balu'}>balu</Link> <br />
            <Outlet/>
        </div>
    )
}

export default Nestedroute
