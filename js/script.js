const resultsContainer = document.querySelector(".results");
const url =
  "https://financialmodelingprep.com/api/v3/stock_news?tickers=AAPL,FB,GOOG,AMZN&apikey=2e601abefa88525eba76e4eb0170fe51";

async function fetchNews() {
  try {
    const response = await fetch(url);
    const json = await response.json();
    console.log(json);
    resultsContainer.innerHTML = "";
    json.forEach(function (article) {
      resultsContainer.innerHTML += `
      <a href="details.html?id=${article.symbol}">
        <h3>${article.title}</h>
        <div class="image" style="background-image: url(${article.image});"></div>
        <div><i>${article.site}</i></div>
        <div>${article.publishedDate}</div>
      </a>        
        `;
    });
  } catch (error) {
    console.log(error);
    resultsContainer.innerHTML = `An error accured calling API`;
  }
}

fetchNews();
