import React from 'react'
import ImageReel from './ImageReel/ImageReel'
import { bbs, rtv } from './ImageReel/image-data'

function Projects(props) {


    return (
        <div>
            <div>
                <ImageReel imgReel={bbs} />
            </div>

            <div>
                <ImageReel imgReel={rtv} />
            </div>


        </div>
    );
}

export default Projects;