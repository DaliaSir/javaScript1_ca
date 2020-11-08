const resultsContainer = document.querySelector(".results");
const url =
  "https://financialmodelingprep.com/api/v3/stock_news?limit=50&apikey=2e601abefa88525eba76e4eb0170fe51";

async function fetchNews() {
  try {
    const response = await fetch(url);
    const json = await response.json();
    console.log(json);
    resultsContainer.innerHTML = "";
    json.forEach(function (article) {
      resultsContainer.innerHTML += `
      <div class="articleContainer">
      <a href="details.html?id=${article.symbol}">
        <h2>${article.title}</h2>
        <div class="image" style="background-image: url(${article.image});"></div>
        <div class="articleDetails"><b>Source:</b> ${article.site} 
        <i class="fas fa-grip-lines-vertical"></i>
        <b>Published:</b> ${article.publishedDate}</div>
        
      </a> 
      </div>       
        `;
    });
  } catch (error) {
    console.log(error);
    resultsContainer.innerHTML = `An error accured calling API`;
  }
}

fetchNews();
