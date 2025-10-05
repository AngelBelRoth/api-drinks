//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
document.addEventListener('DOMContentLoaded', () => {
document.querySelector('button').addEventListener('click', getDrink)

function getDrink() {
    const inputText = document.querySelector('input').value
    console.log(inputText)

    const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${inputText}`
    fetch(url)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
            console.log(data)

            document.querySelector('h2').innerText = data.drinks[0].strDrink
            document.querySelector('img').src = data.drinks[0].strDrinkThumb
            document.querySelector('h4').innerText = data.drinks[0].strInstructions
    
            //Justin Joshi helped me with the if condition
            if (data.drinks[0].strIngredient1) {
                document.querySelector('h3').innerText += ` ${data.drinks[0].strIngredient1}`
            }
            if (data.drinks[0].strIngredient2) {
                document.querySelector('h3').innerText += `, ${data.drinks[0].strIngredient2}`
            }
            if (data.drinks[0].strIngredient3) {
                document.querySelector('h3').innerText += `, ${data.drinks[0].strIngredient3}`
            }
            if (data.drinks[0].strIngredient4) {
                document.querySelector('h3').innerText += `, ${data.drinks[0].strIngredient4}`
            }
            if (data.drinks[0].strIngredient5) {
                document.querySelector('h3').innerText += `, ${data.drinks[0].strIngredient5}`
            }
            if (data.drinks[0].strIngredient6) {
                document.querySelector('h3').innerText += `, ${data.drinks[0].strIngredient6}`
            }
            if (data.drinks[0].strIngredient7) {
                document.querySelector('h3').innerText += `, ${data.drinks[0].strIngredient7}`
            }
            if (data.drinks[0].strIngredient8) {
                document.querySelector('h3').innerText += `, ${data.drinks[0].strIngredient8}`
            }
            if (data.drinks[0].strIngredient9) {
                document.querySelector('h3').innerText += `, ${data.drinks[0].strIngredient9}`
            }
            if (data.drinks[0].strIngredient10) {
                document.querySelector('h3').innerText += `, ${data.drinks[0].strIngredient10}`
            }
            if (data.drinks[0].strIngredient11) {
                document.querySelector('h3').innerText += `, ${data.drinks[0].strIngredient11}`
            }
            if (data.drinks[0].strIngredient12) {
                document.querySelector('h3').innerText += `, ${data.drinks[0].strIngredient12}`
            }
            if (data.drinks[0].strIngredient13) {
                document.querySelector('h3').innerText += `, ${data.drinks[0].strIngredient13}`
            }
            if (data.drinks[0].strIngredient14) {
                document.querySelector('h3').innerText += `, ${data.drinks[0].strIngredient14}`
            }
            if (data.drinks[0].strIngredient15) {
                document.querySelector('h3').innerText += `, ${data.drinks[0].strIngredient15}`
            }

        })
        .catch(err => {
            console.log(`error ${err}`)
        });
}
})