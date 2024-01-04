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
import TwitterX from '../Images/xconvert.png';
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
                        <li className='px-2 md:px-4 text-gray-600 hover:text-gray-700 hover:underline'>
                            <a href='/'>Home</a>
                        </li>
                       
                        <li className='px-2 md:px-4 text-gray-500  cursor-not-allowed'>
                            <a href='/blog'>Blog  
                            </a>
                        </li>

                       
                        <li className='px-2 md:px-4  text-gray-500 cursor-not-allowed'>
                            <a href='/div'>Div</a>
                           
                        </li>
                        
                        <li className='pt-1 px-2 md:px-4'>
                            <a  className='flex justify-center items-center opacity-70 hover:opacity-90' href="https://twitter.com/AlanGeorge_BNE" target="_blank" rel="noopener noreferrer" title="twitter icons">
                                <img src={TwitterX} alt="twitter logo"></img>
                            </a>
                        </li>

                        <li className='px-2 md:px-4'>
                            <a className='flex justify-center items-center opacity-70 hover:opacity-90'
                                href="http://www.linkedin.com/in/alan-george-829706a3" target="_blank" rel="noopener noreferrer">
                                <img src={linkedinLogo} alt="LinkedIn logo"/> 
                            </a>
                        </li>
                        <li className='px-2 md:px-4'>
                            <a className='flex justify-center items-center opacity-70 hover:opacity-90'
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