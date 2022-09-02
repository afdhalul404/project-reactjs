import React, { useEffect, useState } from 'react'

function StateHook() {
   const [umurSaya, setUmurSaya] = useState(0)
   const [kategori, setKategori] = useState('')

useEffect(() => {
  if (umurSaya > 10) {
    setKategori("muda")
  }
  else if (umurSaya>=1 && umurSaya<10) {
    setKategori("terlalu muda boss")
  }
},[])



  return (
    <div> 
      <h2>kategori: {kategori}</h2>
      <h3 style={{display : 'flex', justifyContent: 'center'}}>umur saya: {umurSaya}</h3>
      <button onClick={() => setUmurSaya((prev) => prev+1)}>tambah umur gue</button>
      <button onClick={() => setUmurSaya((prev) => prev-1)}>kurangin umur gue</button>
    </div>
  )
}

export default StateHook