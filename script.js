// const scroll = new LocomotiveScroll({
//     el: document.querySelector("#main"),
//     smooth: true
// });


let searchbtn = document.querySelector(".search-btn");
let inputbox = document.querySelector(".input-box");
let recipeContainer = document.querySelector(".container");


async function fetchRecipe(query){
    
    recipeContainer.innerHTML = "<h2>fetching your favorite recipes...</h2>"
    let data = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
    let response = await data.json();
    

    recipeContainer.innerHTML = "";
    response.meals.forEach(function(meal){
        console.log(meal);

        let recipediv = document.createElement("div");
        recipediv.classList.add("recipe");
        recipediv.innerHTML =`
        <img src="${meal.strMealThumb}">
        <h3>${meal.strMeal}</h3>
        <p>${meal.strArea}</p>
        <p>${meal.strCategory}</p>
        `

        recipeContainer.appendChild(recipediv);
    

        let view = document.createElement("button");
        view.classList.add("viewbutton")
        view.innerHTML = "view";
        recipediv.appendChild(view);
        setTimeout(function(){
            inputbox.value = "";
        },2000)
    })
}

searchbtn.addEventListener("click",function(e){

    // console.log("clicke.......");
    e.preventDefault();
    let searchVal = inputbox.value.trim();
    if(searchVal == ""){
        recipeContainer.innerHTML = "<h2>oops, Something went wrong !...</h2><br><h2>Sorry you have not not search any recipe </h2>"
    }else{
        fetchRecipe(searchVal);
    }
    
});




