import React, { useEffect, useRef, useState } from 'react'

function Prevvalue() {
    const [count, setcount] = useState(0)
    const ref = useRef();
    useEffect(()=>{
        ref.current=count
    });

    let num =  ref.current
    return (
        <div>
            <h1>current {count}</h1>
            <h1>previous {num}</h1>
            <h1>difference {count - num}</h1>
            <button onClick={()=>setcount(Math.floor(Math.random()*10))}>up</button>
        </div>
    )
}

export default Prevvalue
