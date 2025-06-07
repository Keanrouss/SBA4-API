//all of the character info from HTML to connect in DOM
let body = document.querySelector("body")
let selection = document.getElementById('.characterselection');

//let array= []
//const characterlist = forEach((index) => {
//})
//body.appendChild(selection);
//Title/banner information
let Narutotitle = document.querySelector('h2')
Narutotitle.style.display = "flex";
Narutotitle.style.justifyContent = "center"
Narutotitle.style.height = "200px"
let mainContainer = document.createElement('div')
let namebanner = document.createElement('h2')
//namebanner.textContent= characters.name 
mainContainer.appendChild(namebanner)
//image.src= ""
//body.appendChild(image)


let image = document.createElement('img');
let divCard = document.createElement('div');
divCard.appendChild(image);
image.setAttribute('height', '300');
image.setAttribute('width', '400');
body.appendChild(divCard)
divCard.style.height = '500px'
divCard.style.width = '400px'
divCard.style.border = ' 5px solid black'
divCard.style.backgroundColor = 'white'

async function getdata() {
    const response = await fetch('https://dattebayo-api.onrender.com/characters');
    const data = await response.json()
    const characters = data.characters
    for (let character of characters) {
        console.log (characters.images[0])
        console.log(`Name: ${character.name}`);
        console.log(`Gender: ${character.personal.sex}`);
        console.log(`Birthdate: ${character.personal.birthdate}`);
        console.log(`Village: ${character.personal.affiliation[0]}`)
        console.log(`Clan: ${character.personal.clan}`);
    }

    let array = [] //characters are nestled inside array under the index numbers
    forEach((index, char) => {
        let options = document.createElement('option');
        options.value = index//the value needed
        options.textContent = char.name
         image.src = characters[key].images[0]
        selection.appendChild(options);
    })
    let image = document.createElement('img');
let divCard = document.createElement('div');
divCard.appendChild(image);
image.setAttribute('height', '300');
image.setAttribute('width', '400');
body.appendChild(divCard)
divCard.style.height = '500px'
divCard.style.width = '400px'
divCard.style.border = ' 5px solid black'
divCard.style.backgroundColor = 'white'
    //event 
    let newselection = document.getElementById('CharacterSelection')
    CharacterSelection.addEventListener('change', function () {
        const index = this.value;//from HTML 
        const singleprofile = document.getElementById('character-profile')
        if (index ==="") {
            singleprofile.style.display = 'none'
            singleprofile.innerHTML = "" //open brackets for incoming input
            return;
        } else {
            console.log (error)
        }   
    
        const singlecharacter = characters[index];
})
   //const singlecharacter = characters[index];
    
    //singleprofile information to display
     singleprofile.innerHTML = `
     <img src="${char.images?.[0] || 'default.jpg'}" alt="${char.name}" />
     <h2>${char.name}</h2>

      `;
      profile.style.display = 'block';

        
    
    


}

let button = document.querySelector(".click")
button.addEventListener("click", getdata)
//const namebanner = document.createElement("div")

export { mainContainer, selection, body, namebanner, Narutotitle }