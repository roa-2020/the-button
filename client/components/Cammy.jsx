import React from "react"
import posed from "react-pose"

const Box = posed.div({
  pressable: true,
  draggable: true,
  init: { scale: 1, boxShadow: "0px 0px 0px rgba(0,0,0,0)" },
  press: { scale: 0.8, boxShadow: "5px 5px 10px rgba(0,0,0,0.5)" },
  drag: { scale: 0.8, boxShadow: "5px 5px 10px rgba(0,0,0,0.5)" },
  dragEnd: {
    x: 0,
    y: 0,
    transition: { type: "spring" },
  },
})

class Cammy extends React.Component {
  state = { isVisible: true }

  render() {
    return (
      <Box className="box" pose={this.state.isVisible ? "visible" : "hidden"}>
        <h1 className="box-text" onClick={()=>{this.props.history.push('/')}}>Press Me!</h1>
      </Box>
    )
  }
}

export default Cammy
