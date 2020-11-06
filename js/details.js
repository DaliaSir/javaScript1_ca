const detailContainer = document.querySelector(".article-details");
const pageTitle = document.querySelector(".page-title");

const queryString = document.location.search;
console.log(queryString);
const params = new URLSearchParams(queryString);
console.log(params);
const id = params.get("id");
console.log(id);
const url =
  "https://financialmodelingprep.com/api/v3/stock_news?tickers=" +
  id +
  "&apikey=2e601abefa88525eba76e4eb0170fe51";
console.log(url);

async function fetchArticle() {
  try {
    const response = await fetch(url);
    const details = await response.json();
    console.log(details);
    createHTML(details);
  } catch (error) {
    console.log(error);
    detailContainer.innerHTML = `An error accured calling API`;
  }
}
fetchArticle();

function createHTML(details) {
  detailContainer.innerHTML = `
    <h3>${details[0].title}</h3>
    <div class="image" style="background-image: url(${details[0].image});"></div> 
    <p>${details[0].text}</p>
    <p>Sourse: <i>${details[0].site}</i></p>
    <p>${details[0].publishedDate}</p> 
    <a href="${details[0].url}">Read the full article..</a> 
    `;
  document.title = `${details[0].title}`;
}
