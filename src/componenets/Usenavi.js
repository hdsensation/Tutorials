import React from 'react'
import {Link, useNavigate } from 'react-router-dom'

function Usenavi() {

    const navi = useNavigate();
    return (
        <div>
            <h1>test</h1>
            <Link to={'/about'}>hello its about page</Link>
            <Link to={'/home'}>Hello its home</Link>
            <button onClick={()=>navi('/about')}>about</button>
            <button onClick={()=>navi('/home')}>home</button>
        </div>
    )
}

export default Usenavi
