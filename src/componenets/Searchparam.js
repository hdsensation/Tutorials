// import React from 'react'
import { useSearchParams } from 'react-router-dom'

function Searchparam() {

    const [search]= useSearchParams();
    console.log(search.get('age'))
    return (
        <div>
            <h1>j</h1>
        </div>
    )
}

export default Searchparam
