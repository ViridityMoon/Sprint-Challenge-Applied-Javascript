// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>

const tabHolder = document.querySelector('.topics');
function tabMaker(topic){
    const tab = document.createElement('div');
    tab.classList.add('tab');
    tab.textContent = topic;
    console.log(tab);
    return tab
}
// tabMaker()

function tabAxiosCall(){
    const thePromise = axios.get('https://lambda-times-backend.herokuapp.com/topics')
    thePromise.then(response => {

        console.log(response.data.topics);
        const data = response.data.topics;
        
        data.forEach(function (topic){
            const tabCard = tabMaker(topic);
            tabHolder.appendChild(tabCard);
        })
        
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => {
          console.log('done')
      })
}

tabAxiosCall();