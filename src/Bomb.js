// your Bomb code here!
import React, { Component } from 'react'

class Bomb extends Component {

    constructor (props) {
        super()
        this.state = {
            secondsLeft: props.initialCount

        }
    }

    bom () {
        if(this.state.secondsLeft ===120){
         return   <h6>{this.state.secondsLeft}seconds left before I go boom!</h6>

        }
        else {
            if(this.state.secondsLeft===0){
               return <h6>Bom!</h6>
            }
        }
    }
    render() {
        return(
            <h6>{this.bom()}</h6>
        )

    }
}
export default Bomb
