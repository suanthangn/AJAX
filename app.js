const form = document.querySelector('#searchForm');
form.addEventListener('submit', async function(e){
    e.preventDefault();
    const searchTerm=form.elements.search.value;
    const config= { params: {q: searchTerm, api_key: "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym"}}
    const res = await axios.get(`http://api.giphy.com/v1/gifs/search`, config)
    index = Math.floor(Math.random()*res.data.data.length)
    let gif = (res.data.data[index]);
    const img = document.createElement('IMG')
    img.src=gif.images.original.url;
    $gifArea.append(img);
}
)
const $gifArea = $("#image-placeholder");
$("#remove").on("click", function(e) {
    e.preventDefault();
    $gifArea.empty();
  });





    


 



