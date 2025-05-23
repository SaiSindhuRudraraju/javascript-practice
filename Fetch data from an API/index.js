/*
fetch = Function used for making HTTP requests to fetch resources. 
        (JSON style data, images, files)
        Simplifies asynchronous data fetching in JavaScript and
        used for interacting with APIs to retrieve and send
        data asynchronously over the web.
        fetch(url, {options})
*/

/*
fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
        .then(response => {
            if(!response.ok){
                throw new Error("could not fetch resource");
            }
            return response.json();
        })
        .then(data => console.log(data))
        .catch(error => console.error(error));

*/

async function fetchData() {
    try{

        const pokemonName = document.getElementById("pokemonName").value.toLocaleLowerCase();
        
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

        if(!response.ok){
            throw new Error("could not fetch resource");
        }

        const data = await response.json();

        const pokemonSprite = data.sprites.front_default;
        const imageElement = document.getElementById("pokemonSprite");

        imageElement.src = pokemonSprite;
        imageElement.style.display = "block";
    }
    catch(error){
        console.error(error);
    }
}

fetchData();