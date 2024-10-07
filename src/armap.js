import React from 'react'
function Multi(num){
    return num*10;
}


function Armap() {
    const numbers = [4,9,16,25];
    // const newArr = numbers.map(Math.sqrt)
    const newArr = numbers.map(Multi)
  return (
    <div>
     <h2>{newArr}</h2>
    </div>
  )
}

export default Armap
