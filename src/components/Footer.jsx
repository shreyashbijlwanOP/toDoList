import React from 'react'

const Footer = ({length}) => {
  return (
    <footer>
      {length===1 ? `${length} item`:`${length} items` }
    </footer>
  )
}

export default Footer