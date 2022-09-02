import React, { Component } from 'react'

export default class TambahKurang extends Component {
   constructor(){
      super()
      this.state = {
         angka : 0
      }
   }

   increment = (inc) =>{
      this.setState({
         angka : this.state.angka+inc
      })
   }


  render() {
    return (
      <div>
        <button onClick={ () => this.increment(1) }>+</button>
        <h3>{ this.state.angka }</h3>
        <button onClick={() => this.setState({angka : this.state.angka-1})}>-</button>
      </div>
    )
  }
}
