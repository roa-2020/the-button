import React from "react"
import posed from "react-pose"

const Box = posed.div({
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
})

class Cammy extends React.Component {
  state = { isVisible: true }

  //   componentDidMount() {
  //     setInterval(() => {
  //       this.setState({ isVisible: !this.state.isVisible })
  //     }, 1000)
  //   }

  render() {
    return (
      <Box className="box" pose={this.state.isVisible ? "visible" : "hidden"} />
    )
  }
}

export default Cammy
