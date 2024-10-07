import React from 'react'
import { useState } from 'react';

function Form() {
    const [name, setName] = useState("");
    const [lastname, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Your name is ${name} ${lastname} and your email is ${email}`)
    }
  return (
    <>
    <center>
        <h1 className='pt-3 text-light'>Form in React</h1>
    <form onSubmit={handleSubmit} className='form-contain'>
    <label>
    Enter your Name:
    <input className='p-2 m-2'
    type='text'
    value={name}
    onChange={(e) => setName(e.target.value)}
    required
    />
   </label><br/>
   <label>
    Enter Last Name:
    <input className='p-2 m-2'
    type='text'
    value={lastname}
    onChange={(e) => setLastName(e.target.value)}
    required
    />
   </label><br/>
   
   <label>
    Enter Your Email:
    <input className='p-2 m-2'
    type='email'
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    required
    />
   </label><br/>

   <input className='btn-2'
   type='submit'
   />
    </form>
    </center>
   
    </>
  )
}

export default Form
