// import React from 'react'

// function Belajarprops(props) {

//   return (
//     <div>
//       <p>halo { props.nama } ini props dengan function component</p>
//       <button>{ props.tekan } ini juga</button>
//     </div>
//   )
// }

// export default Belajarprops


// props pada class component
// import React, { Component } from 'react'

// function Umur(props) {
//   return <span>umur {props.age}</span>
// }

// export default class Belajarprops extends Component {
//   constructor(){
//     super()
//     this.state = {
//       nama : 'tyo',
//       alamat : 'Kendari'
//     }
//   }

// ubahData = () =>{
//   this.setState({
//     nama : 'afdhalul rahmat septyo',
//     alamat : 'Unaaha'
//   })
// }


//   render() {
//     return (
//       <div>
//         <h1>halo {this.state.nama}</h1>
//         <h2>halo {this.state.alamat}</h2>
//         <h3><Umur age= '20' /></h3>
//         <button onClick={this.ubahData}>Ubah Data</button>
//       </div>
//     )
//   }
// }
import React from 'react'
import { useState } from 'react'
import Products from './Products'

export default function Belajarprops() {

  const [products, setProducts] = useState([
    {id: 1, title: 'Product 1', price: 199},
    {id: 2, title: 'Product 2', price: 123},
    {id: 3, title: 'Product 3', price: 245},
    {id: 4, title: 'Product 4', price: 200},
    {id: 5, title: 'Product 5', price: 111},
  ])

  const deleteProduct = (productId) => {
    const newProducts = products.filter((product) => product.id !== productId);
    setProducts(newProducts);
    // setProducts(products.filter((product) => product.id !== productId));
  }

  return (
    <div>
      <Products products={products} deleteProduct={deleteProduct}/>
    </div>
  )
}



