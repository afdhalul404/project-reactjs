import React, { useState } from 'react'
import './style/navbar.css'


export default function Navbar() {
   const [nav, setnav] = useState('Home')

  return (
    <div className='nav'>
      <ul>
         <div className="home"><li>{nav}</li></div>
         <div className="about"><li>About</li></div>
         <div className="contac"><li>Contac</li></div>
      </ul>
    </div>
  )
}
