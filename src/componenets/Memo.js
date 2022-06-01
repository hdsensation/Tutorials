import React, { useMemo, useState } from 'react'

function Memo() {
    const [count, setcount] = useState(0)
    const [item, setitem] = useState(1)

    

    const memocn=useMemo(() => {
        console.log('memosss')
        return count*2
    }, [count])


    return (
        <div>
            <h1>{count}</h1>
            <h1>{item}</h1>
            {/* <h1>{update()}</h1> */}
            <h1>{memocn}</h1>
            <button onClick={()=>setcount(count+1)}>Update count</button>
            <button onClick={()=>setitem(item*2)}>update item</button>
        </div>
    )
}

export default Memo
