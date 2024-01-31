
const accessKey="rtbafw8_KcflrLytPf_CFw3KEjkxA8ZrsScTY1RUQl0";

const searchForm= document.getElementById("search-form");
const searchBox= document.getElementById("search-box");
const searchResult= document.getElementById("search-result");
const ShowMore= document.getElementById("show-more-btn");


let keyword="";
let page=1;

async function searchImages(){
    keyword=searchBox.value;
    const url=`https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;


const response= await fetch(url);
const data=await response.json();

if(page==1){
    searchResult.innerHTML="";
    
}

// print data
//console.log(data);
const results= data.results;

results.map((result)=>{
    //create img
    const image=document.createElement("img");
    image.src=result.urls.small;

    // create a tag
    const imageLink=document.createElement("a");
    imageLink.href=result.links.html;
    imageLink.target="_blank";


    imageLink.appendChild(image);
    searchResult.appendChild(imageLink);


})
//display show more button
ShowMore.style.display="block";

}

// on search
searchForm.addEventListener("submit", (e)=>{
        e.preventDefault();

//add page
page=1;
//call aynsc function
searchImages();

})
//load more img
ShowMore.addEventListener("click",()=>{
    page++;
    searchImages();

})
