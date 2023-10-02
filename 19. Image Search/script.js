const searchForm = document.getElementById("search");
const searchInput = document.getElementById("search-box");
const searchResult = document.getElementById("search-result");
const showMore = document.getElementById("show-more-btn");


let keyWord = "";
let page = 1;

async function searchImages(){
    keyWord = searchInput.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyWord}&client_id=${accessKey}&per_page=12`

    const response = await fetch(url);
    const data = await response.json();

    if (page === 1){
        searchResult.innerHTML = "";
    }
    const results = data.results;

    results.map( (result) =>{
        const image = document.createElement("img");
        image.src = result.urls.small;

        const imageLink = document.createElement("a")
        imageLink.href = result.links.html;
        imageLink.target = "_blank";

        imageLink.appendChild(image);

        searchResult.appendChild(imageLink)
    })
    showMore.style.display = "block";
}

searchForm.addEventListener("submit", (e) =>{
    e.preventDefault();
    page = 1;

    searchImages();
})

showMore.addEventListener("click", () =>{
    page++;
    searchImages();
})