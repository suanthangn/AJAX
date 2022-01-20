
const form = document.querySelector('#searchForm');
form.addEventListener('submit', async function(e){
    e.preventDefault();
    const searchTerm=form.elements.search.value;
    const config= { params: {q: searchTerm, api_key: "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym"}}
    const res = await axios.get(`http://api.giphy.com/v1/gifs/search`, config)
    let  gifs= res.data.data;
    makeImages(gifs)
    //let arrayIndex= Math.floor(Math.random()*res.data.length)

}
)
//let gifs=res.data.data;
const makeImages = (gifs) => {
    for(let result of gifs){
        const img = document.createElement('IMG')
        img.src = result.images.original.url;
        document.body.append(img)
    }
}
    


 



