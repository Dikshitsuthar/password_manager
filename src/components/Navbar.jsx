import React from 'react'
import "../styles/navbar.css"
const Navbar = () => {
    return (
        <nav className='bg-slate-800 text-white' >
            <div className="mycontainer flex justify-between items-center px-4 py-5 h-14">

                <div className="logo font-bold text-white text-2xl">
                    <span className='text-blue-500'> &lt;</span>
                   
                    <span>Pass</span><span className='text-blue-500'>Word/&gt;</span>
                  
                    
                    </div>
                {/* <ul>
                    <li className='flex gap-4 '>
                        <a className='hover:font-bold' href='/'>Home</a>
                        <a className='hover:font-bold' href='#'>About</a>
                        <a className='hover:font-bold' href='#'>Contact</a>
                    </li>
                </ul> */}
                <button className='text-white bg-blue-700 my-5 mx-2 rounded-full flex  justify-between items-center ring-white ring-1'  onClick={() => window.open('https://github.com/Dikshitsuthar/' , '_blank')}> 
                    <img className='invert  w-10 p-1' src="/icons/github.svg" alt="github logo" />
                    <span className='font-bold px-2'>GitHub</span>
                    
                </button>
            </div>
        </nav>
    )
}

export default Navbar