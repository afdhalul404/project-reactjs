import React, { Component, useState } from 'react'
// import Template from './components/project1/Template'
// import Doc from './components/Doc'
// import SinglePage from './components/SinglePage'
// import StateHook from './components/StateHook'
// import Belajarprops from './components/Belajarprops'
// import TambahKurang from './components/TambahKurang'

// single page apk

function Tambah() {
    const [count, setCount] = useState(1);
    const kurang = () => setCount(count - 1)

    return (
      <>
      <button onClick={kurang}>-</button>
      <span>{count}</span>
      <button onClick={() => setCount(count + 1)}>+</button>
      </>
    )

}



export default class App extends Component { 

  render() {

    return (
      <div className='App'>
        {/* <TambahKurang /> */}
        {/* <Belajarprops /> */}
        {/* <StateHook /> */}
        {/* <SinglePage /> */}
        {/* <Doc /> */}
        {/* <Template /> */}
        <Tambah />
    
      </div>
    )
  }
} 
