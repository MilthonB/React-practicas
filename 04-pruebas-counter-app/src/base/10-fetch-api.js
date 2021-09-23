

const url = 'http://api.giphy.com/v1/gifs/random?api_key=FAojj336ohZpReqVhyVwVOHo1jWO94vB&limit=10';
const apiKey = 'FAojj336ohZpReqVhyVwVOHo1jWO94vB';

const promesa = fetch( url)

promesa
.then( resp =>  resp.json() )
.then( ({data}) => {
    
    const { url } = data.images.original;
    const img = document.createElement('img');
    img.src = url;

    document.body.append(img);

})
.catch( console.warn)