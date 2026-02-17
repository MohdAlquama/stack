import React, { useState } from 'react'

function HeroSectionTest() {

    const [s , s2]= useState(0);
  return (
    <div>
        {s}
        <button onClick={(e)=>s2(s+2)}> updadvdbdte </button>
    </div>
  )
}

export default HeroSectionTest