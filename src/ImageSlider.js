// your ImageSlider code here!
 import React, { Component } from 'react'



 class ImageSlider extends Component {
    constructor() {
        super()
        this.state ={
           currentSlideIndex : 0
        }
    }
     render() {
         return(<h6>I am on slide {this.state.currentSlideIndex}</h6>)
     }
 }
 export default ImageSlider