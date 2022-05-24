import React from 'react'
import Image from './Image'

function ImageReel(props) {
  const {imgReel} = props
  return ( 
    <div>
      {imgReel.map((x) => <Image name={x.name} source={x.source} desc={x.desc}/>)}
    </div>
   );
}

export default ImageReel;