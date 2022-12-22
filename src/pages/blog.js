import React from "react"
//import Head from 'next/head'
//import DivStyles from '../styles/blog.module.css'


export default function Blog() {
    return (
       <div>
          {/*}  <Head>
            <title>Blog Page</title>
    </Head> */}
            <div className='bg-slate-200'>
              <h1 className='flex justify-center items-center text-4xl py-2 min-w-min'>My Blog</h1>
                
                    <article className='grid grid-cols-1 grid-rows-1 md:grid-cols-2  md:grid-rows-2 gap-4 p-4'>
                        <div className='bg-yellow-100  rounded-md border-2 border-slate-800'>
                        <h3 className='font-bold underline p-2'>Who am I and what do I do?</h3>
                        <p className='p-2'>
                        A self-taught, Front-end developer, who works part-time on my own projects or open source.
                        In 2018, I was working for a company and got interested in how hardware and software interact together (Embedded systems). 
                        That was an introduction to Arduino Uno and The C language (Dennis Ritchie). 
                        After six months of learning to program, I came across JavaScript, HTML and CSS. In 2019 I started writing Front-end code.
                        My journey has continued through Computer Science learning a bit from a byte, zero basic maths and how all computers use binary.
                        My LinkedIn and Github links are in the Navbar.
                        </p>
                        </div>
                       
                        <div className='bg-sky-100 rounded-lg border-2 border-slate-800'>
                        <h3 className='font-bold underline p-2'>Why do I code?</h3>
                        <p className='p-2'>
                        It gives you the ability to think, how to break down problems and how to solve them.<br />
                        I enjoy challenges of working with pseudocode, algorithms and data structures.
                        </p>
                        </div>

                        <div className='bg-sky-100 rounded-lg border-2 border-slate-800'>
                        <h3 className='font-bold underline p-2'>Why I use JavaScript?</h3>
                        <p className='p-2'>
                        {"It's"} relatively easy to learn and whither {"it's"} a good or bad a thing, but JavaScript is everywhere.
                        Want to work Frontend with Web or Mobile {"App's"}?
                        Try React, Nextjs or React Native.
                        Need files or data to the client-side or servers? JSON.  Back-end code with {"API's"}? NodeJS.
                        In need of Database storage, then try MongoDB.
                        </p>
                        </div>
                        
                        <div className='bg-yellow-100 rounded-md border-2 border-slate-800'>
                        <h3 className='font-bold underline p-2'>Why the name “SwearJar”?</h3>
                        <p className='p-2'>
                        If anyone has tried their hand at coding, it comes from the challenges of writing clean code, that is bug free and works.
                        {" It's"} an ongoing journey of none stop learning....and filling up the swear jar!
                        </p>
                        </div>
                    </article>
                   <div className='h-44'></div>
                   

               </div>
        </div>
    
    )
}