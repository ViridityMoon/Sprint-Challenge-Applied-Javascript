// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each 'article' in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Use your function to create a card for each of the articles and add the card to the DOM.

function carMaker(attributes){

    // Defining my parameters
    const {headlineParam, imgURL, authorParam} = attributes;

    // Defining the elements
    const card = document.createElement('div');
    const headline = document.createElement('div');
    const author = document.createElement('div');
    const imgHolder = document.createElement('div');
    const img = document.createElement('img');
    const authorsName = document.createElement('span');
    
    // Appending Children or Building Frame
    card.appendChild(headline);
    card.appendChild(author);
    author.appendChild(imgHolder);
    author.appendChild(authorsName);
    imgHolder.appendChild(img);

    // Adding Classes
    card.classList.add('card');
    headline.classList.add('headline');
    author.classList.add('author');
    imgHolder.classList.add('img-container');

    // Adding Text Content
    headline.textContent = headlineParam;
    img.src = imgURL;
    authorsName.textContent = authorParam;

    return card;
}

function addCard(headlineParam, imgURL, authorParam){
    const thePromise = axios.get('URL')
    .then(response => {
        console.log
})
    .catch(error => {
        console.log
    },[])
}