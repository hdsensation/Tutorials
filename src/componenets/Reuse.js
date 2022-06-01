import React from 'react'

function Reuse(props) {
    return (
        <div>
            <h2>{props.data.name}</h2>
            <h2>{props.data.contact}</h2>
        </div>
    )
}

export default Reuse
