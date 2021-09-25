

 export const getGifs = async (category) => {


    const header = 'https://api.giphy.com/v1/gifs/'
    const api_key = 'FAojj336ohZpReqVhyVwVOHo1jWO94vB';
    const url = `${header}search?api_key=${api_key}&q=${encodeURI(category)}&limit=10`

    const res = await fetch(url);
    const { data } = await res.json();
    
    // const gifs = data.map(({ id, title, images }) => {
    //     return {
    //         id,
    //         title,
    //         url: images.downsized_large.url
    //     };
    // });

    const gifs = data.map(({ id, title, images }) => {
        return {
            id,
            title,
            url: images.downsized_large.url
        };
    });



    return gifs;
}


