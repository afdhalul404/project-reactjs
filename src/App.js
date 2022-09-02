import React, { Component } from 'react'
import Template from './components/project1/Template'
// import Doc from './components/Doc'
// import SinglePage from './components/SinglePage'
// import StateHook from './components/StateHook'
// import Belajarprops from './components/Belajarprops'
// import TambahKurang from './components/TambahKurang'

// single page apk


export default class App extends Component {
  render() {
    return (
      <div className='App' style={{display: 'flex', justifyContent: 'center'}}>
        {/* <TambahKurang /> */}
        {/* <Belajarprops /> */}
        {/* <StateHook /> */}
        {/* <SinglePage /> */}
        {/* <Doc /> */}
        <Template />
      </div>
    )
  }
} 
