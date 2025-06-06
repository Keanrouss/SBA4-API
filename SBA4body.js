//all of the buttons/information for the html created in the dom
let body = document.querySelector("body")
let select = document.createElement('select');

body.appendChild(select);
//Title/banner information
let Narutotitle = document.querySelector('h2')
Narutotitle.style.display = "flex";
Narutotitle.style.justifyContent = "center"
Narutotitle.style.height = "200px"
let mainContainer = document.createElement('div')
let namebanner= document.createElement('h2')
namebanner.textContent= characters.name 
mainContainer.appendChild(namebanner)
let image = document.createElement('img')
body.appendChild(image)
image.src= ""


//characters display informations/function to get display
async function getcharacterprofile() {
    const response = await fetch('https://dattebayo-api.onrender.com/characters');
	const data= await response.json()
    const characters = data.characters
    console.log(characters)
    
    characters.forEach((value, key)=>{
             let options = document.createElement('option');
        select.appendChild(options);
        options.innerText = value.name
            console.log(value.name)
        })

 mainContainer = document.createElement('div')
 namebanner= document.createElement('h2')
namebanner.textContent= characters.name 
mainContainer.appendChild(namebanner)

}

let button = document.querySelector(".click")
button.addEventListener("click", getcharacterprofile)
//const namebanner = document.createElement("div")

export {mainContainer, body, namebanner, Narutotitle}