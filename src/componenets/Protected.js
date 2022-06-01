import React from 'react'

function Protected(props) {
    const {Component}=props
    return (
        <div>
            <h1>test</h1>
            <Component />
        </div>
    )
}

export default Protected
