import React, { forwardRef } from 'react'

function Frwrdref(props,ref) {
    return (
        <div>
            <input type="text" ref={ref} />
        </div>
    )
}

export default forwardRef(Frwrdref)
