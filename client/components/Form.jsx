import React from 'react'

class Form extends React.Component {
  state = {
    yeah: '',
  }

  handleChange = (event) => {
    // console.log(event.target.value)
    this.setState({yeah: event.target.value})
  }


  handleSubmit = (event) => {
    event.preventDefault()
    if(this.state.yeah=='yeah'){
    console.log('IT WORKS' , this.state.yeah)
  }
  }

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <label>
            <input type='text' name="message"  onChange={this.handleChange}/>
          </label>
          <input type="submit" value="YEAH!"/>
        </form>
      </>
    )
  }
}
export default Form

