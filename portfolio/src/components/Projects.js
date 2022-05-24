import React from 'react'
import ImageReel from './ImageReel/ImageReel'
import { bbs, rtv } from './ImageReel/image-data'


function Projects(props) {


    return (
        <div>
            {bbs.map((x, index) => <img key={index} src={x.source}/>)}

        </div>
    );
}

export default Projects;