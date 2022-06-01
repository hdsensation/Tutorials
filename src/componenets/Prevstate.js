import React, { useState } from 'react'

function Prevstate() {

    const [count, setcount] = useState(0)



    let upd=()=>{
        setcount((pre)=>{
            console.log(pre)
            return Math.floor(Math.random()*20)
        })
    }
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={upd}>update</button>
        </div>
    )
}

export default Prevstate
