import React from "react"
import posed from "react-pose"

const BackBox = posed.div({
  pressable: true,
  init: { scale: 1, boxShadow: "0px 0px 0px rgba(0,0,0,0)" },
  press: { scale: 0.8, boxShadow: "5px 5px 10px rgba(0,0,0,0.5)" },
})

class Back extends React.Component {
  state = { isVisible: true }
  render() {
    console.log(this.props)

    return (
      <>
        {!this.props.match.isExact && (
          <BackBox
            className="back-box"
            onClick={() => {
              this.props.history.push("/")
            }}
          >
            <h3 className="box-text">Back</h3>
          </BackBox>
        )}
      </>
    )
  }
}

export default Back
