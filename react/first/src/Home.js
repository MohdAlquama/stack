import React, { useState } from 'react'
import Card from './Card'
import Header from './Header'

function Home() {
  const [h,papa]=useState(10)
  function update(){
    papa(h+10)
  }
  return (
    <div>
    <Header/>
        <Card name='alquama' />

    </div>
  )
}

export default Home