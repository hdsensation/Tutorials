import React, { createContext, useState} from 'react'
import Contextchild from './Contextchild';
export const Globe = createContext();

function Context() {
    const [col, setcol] = useState('red')
    const [day, setday] = useState('mon')
    function get(data) {
        console.log(data)
        setday(data)
    }
    return (
        <Globe.Provider value={{color: col,get:get}}>
        <div>
            <h1>{day}</h1>
            <h1>Main component</h1>
            <Contextchild/>
            <button onClick={()=>setcol('cyan')}>change</button>
        </div>
        </Globe.Provider>
    )
}

export default Context
