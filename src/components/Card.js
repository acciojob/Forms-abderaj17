import React from 'react'

const Card = ({children}) => {
  return (
    <div style={{border: "1px solid #ccc", padding: "20px", borderRadius: "9px", margin: "20px auto",width: "50%"}}>
        {children}
    </div>
  )
}

export default Card;