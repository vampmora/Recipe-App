//selectors
const container = document.querySelector('.container');
const form = document.querySelector('form');
const searchResults = document.querySelector('.search-results');
const input = document.querySelector('input');  

let search = '';  

//api id,key & url 

const appID = 'c0d9767e';
const appKey = '0367a3df4161c77eaf6ae867339fe16b';

// we will move it down in the function
//const url = `https://api.edamam.com/api/recipes/v2?type=public&q=chicken&app_id=${APP_ID}&app_key=${APP_key}`;



form.addEventListener('submit', (e)=>{
    e.preventDefault();
    search = e.target.querySelector('input').value;
    
   // console.log(search);   

   fetchAPI();
});

async function fetchAPI(){
    const url = `https://api.edamam.com/api/recipes/v2?type=public&q=${input.value}&app_id=${appID}&app_key=${appKey}`;    
    const res = await fetch(url);    
    const data = await res.json()   
    generateHTML(data.hits);   
    console.log(data); 
}


function generateHTML(results) {
    let openInHTML = '';
    results.map(result =>{
        openInHTML +=
       
      ` 
            <div class="items">
                <img src=" ${result.recipe.image}" alt="">   
                <div class="down-container">
                    <h1 class="title"> ${result.recipe.label}</h1>
                    <a class="view-btn" href="${result.recipe.url}" target='_blank'>View recipe</a>
                </div>
                    
                    <p class="data">Calories ${result.recipe.calories.toFixed(0)} </p>   
                    <p class="data">Ingredients: <br> ${result.recipe.ingredientLines} </p>  
             </div>
        
        `

    });
    searchResults.innerHTML = openInHTML;   
}



let copyRight = new Date().getFullYear();
document.getElementById('year').innerHTML = copyRight;













 