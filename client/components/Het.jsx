import Form from './Form'
import React from "react";
import { Link } from "react-router-dom";

const Het = () => {
  return (
    <div className="container">
      <a href="#" class="shakeme"></a>
      <div >
        <img className='shakeme' src="/images/HetHead.png" alt="Hetfield Head"/>
        <Form className= 'formCentre'></Form>
      </div>
    </div>
  );
};




export default Het;