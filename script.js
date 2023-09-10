const quote = document.getElementById("quote"); // Use getElementById, not getElementsById
const author = document.getElementById("author"); // Use getElementById, not getElementsById

const api_url = "https://api.quotable.io/random";

async function getquote(url) {
  const response = await fetch(url);
//   const response = await fetch(url);: This line sends a HTTP GET request to 
// the specified URL using the fetch function and waits for the response.
  const data = await response.json();
//   After the response is received, this line reads the response data as JSON using the .json() method and assigns
//  it to the data variable. Again, await is used to wait for the JSON parsing to finish.
  quote.innerHTML = data.content;
//   : Assuming that there are HTML elements with the IDs "quote" and "author" in the web page's DOM, this line updates
//  the inner HTML content of the element with the ID "quote" with the content property of the data object.
  author.innerHTML = data.author;
//   : Similarly, this line updates the inner HTML content of the element with the ID "author" with the
//  author property of the data object, presumably displaying the author's name.
}

getquote(api_url);

function tweet()
{
    window.open("https://twitter.com/intent/tweet?text= "+quote.innerHTML + "    ----  By"     +   author.innerHTML,"Tweet window","width=600,height=300");
}


