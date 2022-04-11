async function getQuote() {
  console.log("quote button was clicked");
  try {
    const response = await fetch(endpoint);
    if (!response.ok) {
      throw Error(response.statusText);
    }

    const json = await response.json();
    console.log(json);
    displayQuote(json.quote);
  }
  catch(err) {
    console.log(err);
    alert('Failed');
  }
}

async function getImage() {
  console.log("character button was clicked");
  try {
    const response2 = await fetch(endpoint2);
    if (!response2.ok) {
      throw Error(response2.statusText);
    }

    const json2 = await response2.json();
    console.log(json2);
    displayImage(json2.data[Math.floor(Math.random() * 50)].name);
  }
  catch(err) {
    console.log(err);
    alert('Failed');
  }
}

function displayQuote(quote) {
  const quoteText = document.querySelector('#js-quote-text');
  quoteText.textContent = quote;
}
function displayImage(quote2) {
  const charImage = document.querySelector('#js-character-image');
  charImage.textContent = quote2;
}

const endpoint = 'https://randommarvelquoteapi.herokuapp.com/';
const endpoint2 = 'https://api.disneyapi.dev/characters?page=10';

//https://randommarvelquoteapi.herokuapp.com/
//quote

//https://api.disneyapi.dev/characters
//data[Math.floor(Math.random() * 50)].name


const quoteButton = document.querySelector('#js-new-quote');
quoteButton.addEventListener('click', getQuote);
const characterButton = document.querySelector('#js-new-character');
characterButton.addEventListener('click', getImage);
