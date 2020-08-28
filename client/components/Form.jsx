import React from 'react'

class Form extends React.Component {
  state = {
    name: '',
    email: '',
    message: '',
  }

  handleChange = (event) => {
    console.log(event.target.name, event.target.value)

    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    
    console.log('name:', this.state.name)
    console.log('email:', this.state.email)
    console.log('message:', this.state.message)

    this.props.history.push('/cute/' + (Math.random() > 0.5 ? 'cats' : 'dogs'))
  }

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <label>
            <input type='text' name="message" onChange={this.handleChange}/>
          </label>
          <input type="submit" value="YEAH!"/>
        </form>
      </>
    )
  }
}
export default Form

