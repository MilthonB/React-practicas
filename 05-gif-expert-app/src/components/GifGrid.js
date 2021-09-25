

import React,{useEffect} from 'react'

export const GifGrid = ({ category }) => {

    useEffect(() => {
        getGif();
    },[]);

    const getGif = async () => {

        const header = 'https://api.giphy.com/v1/gifs/'  
        const api_key = 'FAojj336ohZpReqVhyVwVOHo1jWO94vB';
        const url = `${header}search?api_key=${api_key}&q=${category}&limit=10`

        const res = await fetch(url);
        const { data } = await res.json();
        const gifs = data.map(({id, title,images}) => {
            return {
                id,
                title,
                url: images.downsized_large.url
            };
        });

        console.log(gifs);
    }

    // getGif();

    return (
        <>
            <h3> {category} </h3>
        </>
    )
}
