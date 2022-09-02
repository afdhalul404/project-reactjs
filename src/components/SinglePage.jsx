import React from 'react'
import Navbar from './Navbar'
import Card from './card'
import './style/singlepage.css'

export default function SinglePage() {
  return (
    <div className='single-page'>
      <div className="navbar">
         <Navbar />
         <Card />
      </div>
    </div>
  )
}
