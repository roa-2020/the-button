import React from "react"
import posed from "react-pose"

const Input = posed.input({
  focusable: true,
  init: {
    color: "#aaa",
    outlineWidth: "0px",
    outlineOffset: "0px",
    scale: 1,
  },
  focus: {
    color: "#000",
    outlineWidth: "12px",
    outlineOffset: "5px",
    outlineColor: "#AB36FF",
    scale: 1.2,
  },
})

class Form extends React.Component {
  state = {
    yeah: "",
  }

  handleChange = (event) => {
    this.setState({ yeah: event.target.value })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const x = document.getElementById("myAudio")
    if (this.state.yeah == "yeah") {
      x.play()
    }
  }

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <label>
            <audio id="myAudio">
              <source src="/sounds/YEAH!.mp3" type="audio/mpeg" />
            </audio>
            <Input type="text" name="message" onChange={this.handleChange} />
          </label>
          <input type="submit" value="YEAH!" />
        </form>
      </>
    )
  }
}
export default Form
