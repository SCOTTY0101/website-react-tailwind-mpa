//import React, { useRef } from 'react';
import React, { useState } from 'react'

function UsernameForm() {
  const [username, setUsername] = React.useState('');
  const isLowercase = username === username.toLowerCase();
  const error = isLowercase ? null : 'Username must be lowercase';
 // const inputRef = useRef();  //(null)

  function handleSubmit(event) {
    event.preventDefault();
    //const username = event.target.elements.usernameInput.value //not needed with useState hook
   // console.log(inputRef.current.value);
    console.log(`You entered ${username}`)
  };

  function handleChange(event) {
    setUsername(event.target.value)
  }

  return (
    <>
    <form onSubmit={handleSubmit}>
      <div>
      <label htmlFor="usernameInput">Userame:</label>
        <input id="usernameInput" type="text" onChange={handleChange} />
        </div>
      <div style={{color: 'red'}}>{error}</div>
    <button disabled={Boolean(error)} type="submit" className="hover:opacity-80  bg-slate-200 border-2 border-slate-700 rounded-xl px-2">Submit</button>
    </form>
    </>
   
  );
}

export default UsernameForm;

/*
 <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" ref={inputRef} />
      </label>
      <button type="submit">Submit</button>
    </form>
*/