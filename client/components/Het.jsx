import Form from "./Form"
import React from "react"
import { Link } from "react-router-dom"

const Het = () => {
  return (
    <div className="hetContainer">
      <img className="shakeme" src="/images/HetHead.png" alt="Hetfield Head" />
      <a href="#" className="shakeme"></a>
      <Form className="formCentre"></Form>
    </div>
  )
}

export default Het
