import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const param = useParams();
    const {name} = param
    return (
        <div>
            <h1>This page of {name}</h1>
        </div>
    )
}

export default User
