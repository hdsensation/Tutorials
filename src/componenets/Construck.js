import React, { Component } from 'react'

export class Construck extends Component {
    constructor(){
        super();
        this.state={
            name: 0
        }
    }


    componentWillUnmount(){
        alert('Unmount ho gaya')
    }

    // shouldComponentUpdate(){
    //     console.log(this.state.name)
    //     if(this.state.name > 5 && this.state.name < 10){
    //         return true
    //     }
    // }

    // componentDidUpdate(prevprop,prevstate){
    //     console.log('cupd',prevstate)
    //     if(prevstate.name === this.state.name){
    //         alert('shame')
    //     }
    // }
    render() {
        return (
            <div>
                <h1>mountwala</h1>
                {/* <h1>{this.props.naam}</h1>
                <h1>{this.state.name}</h1>
                <button onClick={()=>this.setState({name: this.state.name+1})}>update</button> */}
            </div>
        )
    }
}

export default Construck
