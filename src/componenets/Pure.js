import React, {  PureComponent } from 'react'

export class Pure extends PureComponent {
    constructor(){
        super();
        this.state={
            count : 0
        }
    }
    render() {
        console.log('chalaaaa')
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={()=>this.setState({count : 1})}>update</button>
            </div>
        )
    }
}

export default Pure
