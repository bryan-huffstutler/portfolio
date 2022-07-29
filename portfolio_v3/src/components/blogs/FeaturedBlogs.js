import React, {useEffect, useState} from 'react'
import axios from 'axios'


function FeaturedBlogs(props) {
    const [blogs, setBlogs] = useState()


    
    useEffect(() => {
        axios.get('http://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@bhuff8404&api_key=yuyvydxbl7tdv33kvrr5zfs8wy6rrrjpwvlwipzm')
        .then(res => setBlogs(res.data.items))
        .catch(err=>console.log(err))
    }, [])

    return ( 
        <div>
            
        </div>
     );
}

export default FeaturedBlogs;