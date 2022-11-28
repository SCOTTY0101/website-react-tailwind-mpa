//import Head from 'next/head'
//import NavStyles from '../styles/Nav.module.css'
import React from "react"

export default function Div() {
    return (
        <div>
          {/*}  <Head>
                <title>Div Page</title>
            </Head>
    */}
            <div>
                <div className='flex h-screen w-screen justify-center items-center'>
                {/*<h1 className={NavStyles.centerDiv}>DIV</h1> 
                <p className={NavStyles.divP}> &rarr; hire me &larr; </p>  
                */}     
                    <h1 className='flex justify-center items-center text-center shadow-xl rounded-xl h-24 w-24 bg-sky-200 '>DIV</h1> 
               {/*} <p className=''> &rarr; hire me &larr; </p> */} 
                </div>
            </div>
        </div>
    )
}



