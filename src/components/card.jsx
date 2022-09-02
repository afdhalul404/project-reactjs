import React, { useState } from 'react'
import './style/card.css'

export default function Card(props) {
   const [content, setContent] = useState('Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam voluptates et repellendus iusto in excepturi mollitia at magni, similique est commodi provident, beatae culpa soluta modi ad quo veritatis suscipit aperiam cum alias accusamus distinctio. Maxime facilis culpa ullam totam, nobis nisi doloribus non, accusamus autem, suscipit harum itaque earum impedit similique ad expedita. Doloribus dignissimos recusandae velit sapiente minus! Eveniet distinctio dolorum fugit vel veritatis? Cumque officia tenetur cum fuga temporibus suscipit ad eum dolore assumenda, iusto reprehenderit commodi soluta, voluptas velit ab, voluptatibus aut eius! Asperiores quisquam corrupti necessitatibus! Dignissimos, natus! Nam consequuntur est ipsam pariatur sunt exercitationem.')

  return (
    <div className='card'>
      <h1>Home</h1>
      <p>{content}</p>
      <p>{content}</p>
    </div>
  )
}
