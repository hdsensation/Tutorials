// HOC are those component which take and return an component
import React from 'react'

function Hoc() {
    return (
        <div>
            <Main chk={Fnred}/>
        </div>
    )
}

function Main(props) {
    return <h1>HOC component test<props.chk/></h1>
}

function Fnblue(params) {
    
    return <h1 style={{color: 'blue'}}>Hello</h1>
    
}

function Fnred(params) {
    
    return <h1 style={{color: 'red'}}>Hello</h1>
    
}

export default Hoc
