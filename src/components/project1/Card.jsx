import React from 'react'
import { useState } from 'react'
import '../project1/card.css'
import Tombol from './Tombol'

export default function Card(props) {
   const [exp, setExp] = useState(1);

   const upExp = () => setExp((prev) => prev+1);

  return (
    <div className='card' >
      <Tombol />
      <h2>{props.nama}</h2>
      <p>{props.desc}</p>
      <div className="exp">
         <p>exp : </p><button onClick={() => setExp((prev) => prev-1)}>-</button><p>{exp}</p><button onClick={upExp}>+</button>
      </div>
      <button onClick={() => setExp((exp) => 0)}>reset exp</button>
    </div>
  )
}
