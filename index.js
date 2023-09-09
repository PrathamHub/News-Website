const API_KEY='bf32e92144714b79a7b7f5f71cd637ea';
const url='https://newsapi.org/v2/everything?q=';

window.addEventListener('load',()=> fetchNews('India'));
function reload() {
    window.location.reload();
}

async function fetchNews(query){
    
    const res = await fetch(`${url}${query}&apiKey=${API_KEY}`);
    const data=await res.json();
    bindData(data.articles);

} 
function bindData(articles){
    const cardsContainers=document.getElementById('cards-container');
    const newsCardTemplates=document.getElementById('template-news-card')
    cardsContainers.innerHTML="";
    articles.forEach((article)=> {
        if (!article.urlToImage) return;
        // const cardClone =newsCardTemplates.content.cloneNode(true);
        const cardClone = newsCardTemplates.content.cloneNode(true);
        fillData(cardClone,article);
        cardsContainers.appendChild(cardClone);
    });

}

function fillData(cardClone, article){
    const newImg=cardClone.querySelector('#news-image');
    const newTitle=cardClone.querySelector('#news-title');
    const newSource=cardClone.querySelector('#news-source');
    const newDesc=cardClone.querySelector('#news-desc');

    newImg.src=article.urlToImage;
    newTitle.innerHTML=article.title;
    newDesc.innerHTML=article.description
}


