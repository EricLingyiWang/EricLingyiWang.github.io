console.log("hi")
const quoteElement = document.getElementById("js-quote-text");
const api_url = "https://api.quotable.io/random";

async  function getQuote() {
	const response = await fetch(api_url);
    var data = await response.json();

    quoteElement.innerHTML = data.author + ":  " + data.content;
  }

	const randomColor = "#"+((1<<24)*Math.random()|0).toString(16);
	document.documentElement.style.setProperty('background-color', randomColor);
