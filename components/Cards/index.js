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
const cardContainer = document.querySelector('.cards-container');
// console.log(cardContainer);
function cardMaker(attributes){
    console.log(attributes)
    // Defining my parameters
    const {headline, authorPhoto, authorName} = attributes;

    // Defining the elements
    const card = document.createElement('div');
    const header = document.createElement('div');
    const author = document.createElement('div');
    const imgHolder = document.createElement('div');
    const img = document.createElement('img');
    const authorsName = document.createElement('span');
    
    // Appending Children or Building Frame
    card.appendChild(header);
    card.appendChild(author);
    author.appendChild(imgHolder);
    author.appendChild(authorsName);
    imgHolder.appendChild(img);

    // console.log(imgURL);
    // console.log(headline);
    // console.log(authorName);
    // Adding Classes
    card.classList.add('card');
    header.classList.add('headline');
    author.classList.add('author');
    imgHolder.classList.add('img-container');

    // Adding Text Content
    header.textContent = headline;
    img.src = authorPhoto;
    authorsName.textContent = authorName;
    
    return card;
}

function addCard(attributes){
    const thePromise = axios.get('https://lambda-times-backend.herokuapp.com/articles');
    thePromise.then(response => {
        console.log(response);
        data = response.data.articles;
        bootstrap = data.bootstrap;
        javascript = data.javascript;
        jquery = data.jquery;
        node = data.node;
        technology = data.technology;
        bootstrap.forEach(function(attributes){
            const cards = cardMaker(attributes);
            cardContainer.appendChild(cards);
        })
        javascript.forEach(function(attributes){
            const cards = cardMaker(attributes);
            cardContainer.appendChild(cards);
        })
        jquery.forEach(function(attributes){
            const cards = cardMaker(attributes);
            cardContainer.appendChild(cards);
        })
        node.forEach(function(attributes){
            const cards = cardMaker(attributes);
            cardContainer.appendChild(cards);
        })
        technology.forEach(function(attributes){
            const cards = cardMaker(attributes);
            cardContainer.appendChild(cards);
        })
})
    .catch(error => {
        console.log(error.message)
    })
}
addCard()