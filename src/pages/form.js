import React, { useRef } from 'react';

function UsernameForm() {
  const inputRef = useRef();  //()

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputRef.current.value);
  };

  return (
    <>
    <form onSubmit={handleSubmit}>
      <label>Name:</label>
        <input type="text" ref={inputRef} />
      </form>
    <button type="submit" className="hover:opacity-80  bg-slate-200 border-2 border-slate-700 rounded-xl px-2">Submit</button>
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