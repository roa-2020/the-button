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
      <div className='hetContainer'>
        <form onSubmit={this.handleSubmit}>
          <label>
            <textarea name="message" onChange={this.handleChange}></textarea>
          </label>
          <input type="submit" value="YEAH!"/>
        </form>
      </div>
      </>
    )
  }
}
export default Form

