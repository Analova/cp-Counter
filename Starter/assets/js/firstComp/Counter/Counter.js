import React, { Component} from 'react'
import Button  from "./Button"


 export default class Counter extends Component {
  constructor () {
    super()
    this.state = {
     currentNumber:0
    }
  }
clickedAdd=()=>{
  console.log(this.state)
  this.setState({
    currentNumber: this.state.currentNumber +1
  },
()=>{
    console.log(this.state)
})
}

clickedMinus=()=>{
  this.setState({
    currentNumber: this.state.currentNumber -1
  })
}
  render () {
    return (
      <div id="counter-comp" style={styleCounterComp}>
      <div className="Number" style={styleNumber}>
      { this.state.currentNumber}
      </div>
      <div className="buttons" style={styleButtons}>
      <Button
      action="minus"
      fontColor="white"
      hoverColor="red"
      backgroundColor="black"
      trigger={this.clickedMinus}>
      -
      </Button>
      <Button
      action="plus"
      hoverColor="purple"
      backgroundColor="white"
      trigger={this.clickedAdd}>
      +
      </Button>
      </div>
      </div>
)
  }
}


const styleCounterComp ={
  with:"100%",
  maxWidth: "400px",
  margin:"0 auto",
}

const styleNumber ={
   border:"3px solid black",
   padding:"20px",
   fontSize: "2rem",
   fontWeight:"900",
   textAlign:"center",

}

const styleButtons ={
display:"flex"

}
