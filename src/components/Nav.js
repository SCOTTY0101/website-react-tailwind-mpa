//import Link from 'next/link'
//import Image from 'next/image'
import React from "react";
//import { Link } from 'react-router-dom';
//import { Routes, Route} from "react-router-dom";
//import Blog from '../pages/blog.js';
//import { BrowserRouter, Routes, Route } from "react-router-dom";
import gitIogo from '../Images/github.svg';
import linkedinLogo from '../Images/linkedin.svg';
import SJnavLogo from '../Images/favicon.ico';
import twitterLogo from '../Images/twitter copy.svg';

//import { Routes, Route } from 'react-router-dom';
import '../pages/home.js'
import '../pages/blog.js'
import '../pages/divPage.js'

//import styles from '../styles/Nav.module.css'

import '../App.css'
//import Home from "../pages/home.js";
//className={styles.nav}


export default function Navbar() {

    return (
        <div>
            
   
         {/*} <Routes>
                <Route path='/' element={ Home   } />
                <Route path='/blog' element={ Blog  } />
                <Route path='/div' element={ Div  } />
            </Routes>
    */}
            <nav className='w-full  bg-sky-100 shadow-lg border-gray-400 border-b-2'>
              <div className="container flex flex-wrap h-24 md:h-12 lg:h-12 justify-between items-center mx-auto">

           {/*        <Routes>
                <Route path='/' element={ <Home />  } />
                <Route path='/blog' element={ <Blog /> } />
                <Route path='/DivPage' element={ <DivPage /> } />
            </Routes>

*/}
                    <div className='flex pl-2 justify-center items-center'>
                    <a href='/'>
                        <img  src={SJnavLogo} alt="sJs" width='36' height='36'/> 
                    </a>
                    </div>

                <div>                 
                    <ul className='self-center inline-flex'>                      
                        <li className='px-2 md:px-4 text-gray-700 hover:text-gray-500 hover:underline'>
                            <a href='/'>Home</a>
                        </li>
                       
                        <li className='px-2 md:px-4 text-gray-700 hover:text-gray-500 hover:underline'>
                            <a href='/blog'>Blog  
                            </a>
                        </li>
                       
                        <li className='px-2 md:px-4  text-gray-700 hover:text-gray-500 hover:underline'>
                            <a href='/div'>Div</a>
                        </li>

                        <li className='px-2 md:px-4'>
                            <a  className='flex justify-center items-center hover:opacity-70' href="https://twitter.com/AlanGeorge_BNE" target="_blank" rel="noopener noreferrer" title="twitter icons">
                                <img src={twitterLogo} alt="twitter logo"></img> 
                            </a>
                        </li>

                        <li className='px-2 md:px-4'>
                            <a className='flex justify-center items-center hover:opacity-70'
                                href="http://www.linkedin.com/in/alan-george-829706a3" target="_blank" rel="noopener noreferrer">
                                <img src={linkedinLogo} alt="LinkedIn logo"/> 
                            </a>
                        </li>
                        <li className='px-2 md:px-4'>
                            <a className='flex justify-center items-center hover:opacity-70'
                                href="http://www.github.com/SCOTTY0101" target="_blank" rel="noopener noreferrer">
                                  <img id="gitIcon" src={gitIogo} alt="github click link"/>
                            </a>
                        </li>
                    </ul>
                </div>
              </div>
            </nav> 
            
          {/*} </Routes>
            </BrowserRouter>  */}          
        </div>
    )
}
