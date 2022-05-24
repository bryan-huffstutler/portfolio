import React from 'react'
import Image from './Image'


function ImageReel(props) {
  const { imgReel } = props
  const [index, setIndex] = React.useState(0)
  const delay = 7000
  const timeoutRef = React.useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () => 
        setIndex((prevIndex) => 
        prevIndex === imgReel.length-1 ? 0 : prevIndex +1), delay
    );
    return () => {
      resetTimeout()
    };
  }, [index])

  return (
    <div className='imageReel'>

      <div className='imageSlider'
           style={{transform: `translate3d(${-index*100}%, 0, 0)`}}>
          {imgReel.map((x, index) =>( 
            <div className='image' key={index}>
              <img src={x.source} width={1000} height={500} style={{borderRadius: '40px'}}/>
            </div>
          ))}
      </div>

      <div className='imageReelDots'>
        {imgReel.map((_, idx) => (
          <div key={idx} 
          className={`imageReelDot${index === idx ? " active": ""}`}
          onClick={() => {
            setIndex(idx)
          }}></div>
        ))}
      </div>

    </div>
  );
}

export default ImageReel;