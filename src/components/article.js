//import Head from 'next/head'
//import Image from 'next/image'
//import articleStyles from '../styles/Article.module.css'
//import Time from './dateTime.js'
import Magic from '../pages/magicButton.js'
import bne from '../Images/southBankSunSet.jpeg'
//import Blog from '../pages/blog'
//import UsernameForm from './form.js' // Removed 22 Dec for testing


import awsLogo from '../Images/cloud.svg'
import reactLogo from '../Images/reactImg.ico'
import ball8Logo from '../Images/ball.png'
import SJsponceLogo from '../Images/favicon-32x32.png'

//import Magic from '../pages/magicBall.ts'

//import Magic from '../pages/magicButton.js'
import nextLogo from '../Images/next.png'
import tailwindLogo from '../Images/tailwindLogo.svg'
//import { time } from 'console'
//import ids from './article/[id]/index.js'

export default function Home() {

  return (
    <div className='scroll-smooth'>
      {/*<html lang='en'/>  //Caused hydration errors*/}
     {/* <Head> 
        <title>SwearJar</title>
        <meta charSet='utf-8' />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name='keywords' content='nextjs, react, web apps, web site, programming, front end'/>
      </Head>
  */}
      <article className='bg-slate-50 p-2 text-center'>
        <h1 className="text-4xl font-bold m-2 p-4">Building Swearjar website with React/Nextjs</h1>

        <div className='overflow-auto'>
          <p className='font-bold text-3xl m-2 p-1 border-black'>Developer portfolio</p>
          <br/>
        <p>Front-end website for production software development/network testing. <br />
        <b>Responsive Web Design and React Router (AWS S3 bucket) is in testing mode. </b>
        <br /> 
         <b>Router page is under server-side: AWS EC2 testing.</b>
        <br />
          View current version via Github Footer link. </p>
         <br />
       
        <p className='p-2 m-2 font-bold'>Network information:</p>
            <p>Cloud hosted on AWS (Amazon Web Services).</p> 
            <p>AWS Route 53 and S3 storage bucket used to run the stactic webpage.</p>   
            <p>Running on HTTPS (SSL) secure connection on port 443.</p>
            <p>Network testing, Postman, waterfall (loading ms)</p> 
            <p>Lighthouse performance 90%</p>
            <p>In 2025, new features will be added and tested.</p>
       

        <br /> 
          <div className='flex justify-center items-center'>
            <div className='flex-col bg-sky-100 w-1/6 border-2 rounded-2xl animate-pulse border-gray-500 hover:shadow-md'>
              <button className='hover:opacity-80'> AWS
                <a href="http://www.aws.amazon.com/console" target="_blank" rel="noopener noreferrer"
                className='hover:opacity-80'>
                <img className={awsLogo} src={awsLogo} alt="cloud" id="xs-cloud" height="48" width="48" />
                </a>
              </button>

            </div>
          </div>
        <br />
       
      </div>
    </article>

    <article className='bg-slate-100 text-center mt-2'>
      <div className=""> 
        <div className="flex bg-slate-500 px-2 py-2 shadow-lg justify-evenly item-center sm:text-left"> 
          <a className='flex justify-center item-center hover:opacity-70' href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
            <img className={reactLogo} src={reactLogo}  alt="React logo" height="64" width="64"/>
          </a>

          <a className='border-x-2 px-4 md:px-36 border-slate-400 hover:opacity-60' href='https://nextjs.org' target="_blank" rel="noopener noreferrer">
            <img className='' src={nextLogo}  alt="Nextjs logo" height="64" width="64"/>
          </a>

          <a className='pt-4 px-4 hover:opacity-70' href='https://tailwindcss.com' target="_blank" rel="noopener noreferrer">
            <img className='' src={tailwindLogo}  alt="Tailwind logo" height="64" width="64"/>
          </a>
        </div>               
        <p className='mb-2 p-10 leading-relaxed'><b>Website running the React UI component library and Nextjs framework. Originally built with HTML, CSS(Flexbox) and JavaScript.</b>
        <br />
        Powered by React and Tailwind. Software in development.
        <br />
        Test Rendering: SSR (Server-Side Rending), CSR (Client-Side Rendering) and Rehydration.
        <br />
        Performance Testing: TTFB (Time to First Byte), FP (First Paint) - any pixel become visible and 
       <br /> TTI (Time To Interactive) - time at which page becomes interactive.</p>
      </div>        
    </article>
    <div>
      <img className='{bne}' src={bne} id="bne" alt="Brisbane Christmas sunset. Chanda C M" height="" width="" />
    </div>

    <hr />
    

    <article className='bg-gray-100 text-center border-b-2 border-slate-400'>
      <div className="my-4">
        <h2 className='text-2xl p-2 py-4'>
          Testing React/Nextjs and JavaScript via the DOM.
        </h2>

        <div className='flex justify-center h-68 md:h-44 lg:h-44 xl:h-44 2xl:h-44'>
          <div className='flex flex-col justify-center items-center bg-white  rounded-lg shadow-lg w-1/2 md:w-1/3 lg:w-1/3 p-4'>
            <div className="justify-center items-center">
            <img className="" src={ball8Logo}  alt="magic decision ball" height="64" width="64" />
            </div>
              <h3 className="">Magic Decision Ball</h3>
            <button id='magic' className=' bg-slate-200 border-2 border-slate-700 rounded-xl px-2 animate-pulse' onClick={Magic}>
            Click Answer?</button>
          </div>       
        </div>
        

        <p className='m-2 p-2'>Server sponcership available below with PayPal to have credits added to the website.</p>      
           <div className='flex justify-center items-center m-2 p-2'>
            <form className='flex justify-center items-center hover:opacity-90 ' action="https://www.paypal.com/donate" method="post" target="_top" >
              <input type="hidden" name="business" value="E2HRYJQA2AFBJ" />
              <input type="hidden" name="no_recurring" value="0" />
              <input type="hidden" name="item_name" value="Website donation to help pay the server running costs." />
              <input type="hidden" name="currency_code" value="AUD" />
              <input type="image" src="https://www.paypalobjects.com/en_AU/i/btn/btn_donate_SM.gif" 
                border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />

             {/* <img alt="Donate" border="0" src="https://www.paypal.com/en_AU/i/scr/pixel.gif" width="1" height="1"></img> */}
               
            </form>
          </div>

        <div className='flex justify-center item-center w-full'>
            <div className='flex items-center'>
              <p className=' flex text-md m-2'>Sponsors & Website credits : </p>
                <img src={SJsponceLogo} alt="sJs" height="32" width="32"/>
            </div>
        </div>
          {/*<Time /> */}
         {/* <UsernameForm />*/}
          
        </div>
        <p className="p-2">Blog and Div page, routing/link testing.</p>
      <a href='#top' className='text-sky-600  hover:text-blue-400'>Return to top</a>
    </article>
    </div>
  )
}

//export const getStaticProps = async () => {
//  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=5`)
//  const articles = await res.json()

 // return {
//    props: {
  //    articles
  //  }
//  }
//}
