import React, { useContext } from 'react'
import {Globe} from './Context'

function Contextchildone() {

    const {color,get} = useContext(Globe)
    console.log(color)
    const day = 'sunday'
    return (
        <div>
            <h1 style={{color:color}}>child of child</h1>
            <button onClick={()=>get(day)}>click</button>
        </div>
    )
}

export default Contextchildone
