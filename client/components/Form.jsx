import React from 'react'


class Form extends React.Component {
  state = {
    yeah: '',
  }
  
  handleChange = (event) => {
    this.setState({yeah: event.target.value})
  }
  
  
  handleSubmit = (event) => {
    event.preventDefault()
    const x = document.getElementById('myAudio')
    if(this.state.yeah=='yeah'){
      x.play()
    }
  }


  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <label>
            <audio id='myAudio'> 
              <source src='/sounds/YEAH!.mp3' type='audio/mpeg'/>
            </audio>
            <input type='text' name="message"  onChange={this.handleChange}/>
          
          </label>
          <input type="submit" value="YEAH!"/>
        </form>
      </>
    )
  }
}
export default Form

