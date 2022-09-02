import React from 'react'

export default function Products({products, deleteProduct}) {
  return (
    <div>
      <ul>
        { products.map((product) => (
          <li key={product.id}>{product.title} - {product.price} <button onClick={() => deleteProduct(product.id)}>Delete</button></li>
        )) }
      </ul>
    </div>
  )
}


