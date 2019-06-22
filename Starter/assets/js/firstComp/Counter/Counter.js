import React, { Component} from 'react'


 export default class Counter extends Component {
  constructor () {
    super()
    this.state = {

    }
  }

  render () {
    return (
    <div id="counter-comp" style={styleCounterComp}>
  <div className="Number" style={styleNumber}>0</div>
  <div className="buttons"
  style={styleButtons}>
  <div className=" button minus"
  style={styleButton}>-</div>
  <div className=" button plus"
  style={styleButton}>+</div>
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

const styleButton ={
  width:"50%",
   border:"3px solid black",
   padding:"20px",
   fontSize: "2rem",
   fontWeight:"900",
   textAlign:"center",
   cursor:"pointer"
}
