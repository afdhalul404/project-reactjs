import React from 'react'
import Card from './Card'
import '../project1/template.css'

export default function Template() {
  return (
    <div className='body'>
      <Card nama={'Lancelote'} desc={'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit cumque sed repellendus perferendis dolores molestiae nihil quibusdam pariatur unde totam.'}/>
      <Card nama={'Balmond'} desc={'Culpa consequatur dolorem rerum, nulla et sunt, facere ea animi odio dolores dicta minima possimus veritatis'}/>
      <Card nama={'Eudora'} desc={'error corrupti expedita ratione quidem iste cum illum accusamus est ex. Amet, incidunt a.'}/>
    </div>
  )
}
