import React, { Component, createRef } from 'react'

export class Refclass extends Component {

    constructor(){
        super();
        this.inputref = createRef();
    }

    componentDidMount(){
        console.log(this.inputref.current.value=1000)
        this.inputref.current.style.backgroundColor='cyan'
    }
    render() {
        return (
            <div>
                <input type="text" ref={this.inputref}/>
                <button>done</button>
            </div>
        )
    }
}

export default Refclass
