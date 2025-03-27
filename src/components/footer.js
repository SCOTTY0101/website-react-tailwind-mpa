//import Image from "next/image"
//import footerStyle from '../styles/Footer.module.css'
import gitLogo from '../Images/github.svg'
import SJnavLogo from '../Images/favicon.ico'


export default function footer() {

  return (
      <footer className='w-screen bg-slate-300 text-center flex justify-center'>
        <div>

          <p className='text-base pt-2'>Click the GitHub icon to view code.</p>
            <a  href="http://www.github.com/SCOTTY0101/website-react-tailwind-mpa" target="_blank" rel="noopener noreferrer"
            className='m-2 flex justify-center items-center opacity-70 hover:opacity-100 animate-bounce'>
              <img  src={gitLogo} alt="github click link" height='24' width='24'/>
            </a>
          <div className='flex pb-2'>
            <p className="text-base px-6"> &copy; SwearJarSoftware 2019-2025. </p>
              <img className={SJnavLogo} src={SJnavLogo} alt="sJs" width='16' height='16'/>  
          </div>
          
        </div>
      </footer>
  )
}
