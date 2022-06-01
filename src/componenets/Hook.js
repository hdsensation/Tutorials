import React, { useEffect, useState } from 'react'

function Hook() {

    const [data, setdata] = useState(10)
    const [data2, setdata2] = useState(10)


    useEffect(() => {
        alert('data')
        console.log('hooks')
    })
    return (
        <div>
            <h1>{data}</h1>
            <h1>{data2}</h1>
            <button onClick={()=>setdata(20)}>1</button>
            <button onClick={()=>setdata2(30)}>2</button>
        </div>
    )
}

export default Hook
