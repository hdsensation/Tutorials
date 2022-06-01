import React,{useState} from 'react'

function Hide() {

    const [name, setname] = useState('')
    const [cn, setcn] = useState(false)

    return (
        <div>
            {
                cn? <h1>{name}</h1>:null
            }
            <input type="text" onChange={(e)=>setname(e.target.value)}/>
            <button onClick={()=>setcn(!cn)}>Toggle</button>
        </div>
    )
}

export default Hide
