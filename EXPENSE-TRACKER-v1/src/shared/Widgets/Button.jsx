import React from 'react'

export const Button = ({val,fn,}) => {

const myStyle={
   margin:"2px",
   padding:"0px 5px",
   color:"white",
   backgroundColor:"#233142",
   

}

  return (
    <button onClick={fn} style={myStyle}>{val}</button>
  )
}
