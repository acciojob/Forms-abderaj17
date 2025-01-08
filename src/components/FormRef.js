import React, { useRef } from 'react'
import Card from './Card'


const FormRef = () => {
    const fullNameRed = useRef();
    const emailRef = useRef();
    const passwordRef = useRef()
    const confirmPasswordRef = useRef();

    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log("Full Name",  fullNameRed.current.value);
        console.log("Email", emailRef.current.value);
        console.log("Password", passwordRef.current.value);
        console.log("Confirm Password", confirmPasswordRef.current.value);
    };

  return (
    <Card>
        <form id='info-form' onSubmit={handleSubmit}>
        <div>
          <label htmlFor="full_name">Full Name:</label>
          <input id="full_name" ref={fullNameRed} type="text" />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input id="email" ref={emailRef} type="email" />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input id="password" ref={passwordRef} type="password" />
        </div>
        <div>
          <label htmlFor="password_confirmation">Confirm Password:</label>
          <input id="password_confirmation" ref={confirmPasswordRef} type="password" />
        </div>
        <button type="submit">Submit</button>
        </form>
    </Card>
  )
}

export default FormRef