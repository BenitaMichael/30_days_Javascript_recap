const generateBtn = document.querySelector(".generate-btn");
const memeTitle= document.querySelector(".meme-title");
const memeAuthor = document.querySelector(".meme-author");
const memeImg = document.querySelector(".meme-image");

const API =  "https://meme-api.com/gimme";

generateBtn.addEventListener("click", async () =>{
    try{
        const response = await fetch(API);
        const result = await response.json();

        memeTitle.innerHTML = result.title;
        memeAuthor.innerHTML = result.author;
        memeImg.src = result.url;


        console.log(result)
    }catch(err){
        // console.log(err.message)
        memeTitle.innerHTML = "Failed to fetch meme"
    }
})