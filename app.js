const form = document.querySelector('#searchForm');
form.addEventListener('submit', async function(e){
    e.preventDefault();
    const searchTerm=form.elements.search.value;
    const config= { params: {q: searchTerm, api_key: "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym"}}
    const res = await axios.get(`http://api.giphy.com/v1/gifs/search`, config)
    console.log(res.data);
})

const makeImages = (gifs) => {
    for (let result of gifs){
        if(result.data.images){
            const img = document.createElement('IMG');
            img.src= result.data.images.original;
            document.body.append(img)
        }
    }
}