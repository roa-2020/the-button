import React from 'react'

class Contact extends React.Component {
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
        <h3>Contact us:</h3>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" name="name" onChange={this.handleChange}/>
          </label>

          <label>
            Email:
            <input type="text" name="email" onChange={this.handleChange}/>
          </label>

          <label>
            Message:
            <textarea name="message" onChange={this.handleChange}></textarea>
          </label>

          <input type="submit" value="Send"/>
        </form>
      </>
    )
  }
}
export default Contact

