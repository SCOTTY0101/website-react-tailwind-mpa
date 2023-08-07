//import Link from 'next/link'
//import Image from 'next/image'
import React from "react";
//import {Link} from 'react-router-dom';
//import { Routes, Route} from "react-router-dom";
//import Blog from '../pages/blog.js';
//import { BrowserRouter, Routes, Route } from "react-router-dom";
import gitIogo from '../Images/github.svg';
import linkedinLogo from '../Images/linkedin.svg';
import SJnavLogo from '../Images/favicon.ico';
//import twitterXicon from '../Images/xconvert.png'

//import { Routes, Route } from 'react-router-dom';
//import '../pages/home.js'
//import Blog from '../pages/blog.js'
//import Div from '../pages/divPage.js'

//import styles from '../styles/Nav.module.css'

import '../App.css';
//import Home from "../pages/home.js";
//className={styles.nav}


//export default function Navbar() {
const Navbar =() => {
    return (
        <>
            <nav className='w-full  bg-sky-100 shadow-lg border-gray-400 border-b-2'>
              <div className="container flex flex-wrap h-24 md:h-12 lg:h-12 justify-between items-center mx-auto">
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
                        
                        <li className='pt-1 px-2 md:px-4'>
                            <a  className='flex justify-center items-center hover:opacity-70' href="https://twitter.com/AlanGeorge_BNE" target="_blank" rel="noopener noreferrer" title="twitter icons">
                               {/* <img src={twitterXicon} alt="twitter logo"></img>*/ }
                                <svg width="16" height="16" viewBox="0 0 300 300" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M178.57 127.15 290.27 0h-26.46l-97.03 110.38L89.34
                                     0H0l117.13 166.93L0 300.25h26.46l102.4-116.59 81.8 
                                     116.59h89.34M36.01 19.54H76.66l187.13 262.13h-40.66"/>
                                </svg>
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
        </>
    )
}
export default Navbar