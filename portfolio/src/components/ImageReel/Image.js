import React from 'react'

function Image(props) {

  const {source, name, desc} = props

  return ( 
    <div>
      <img src={source} />
      <h6>{name}</h6>
      <p>{desc}</p>
    </div>
   );
}

export default Image;