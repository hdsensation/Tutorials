import React, { useRef } from 'react'

function Reffunc() {
    const ref = useRef(null)
    ref.current.value=100
    return (
        <div>
            <input type="text" ref={ref} />
        </div>
    )
}

export default Reffunc
