import React, { useContext } from 'react'
import {Globe} from './Context'
import Contextchildone from './Contextchildone'


function Contextchild() {
    const {color} = useContext(Globe)
    console.log(color)
    return (
        <div>
            <h1 style={{color:color}}>Child component</h1>
            <Contextchildone/>
        </div>
    )
}

export default Contextchild
