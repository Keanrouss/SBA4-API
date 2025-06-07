import{Selection, profile} from "./SBA4.js"

let characters = []
// Click button have to click first before the select drop down menu can display characters.
//as I was having issues controlling the amount of requests sent out and ended up maxing out requests by 15 apis.
//Oussama set event on click to help control issue.
async function getdata() {
    const response = await fetch('https://dattebayo-api.onrender.com/characters');
    const data = await response.json()
    characters = data.characters
    //for (let character of characters) {

    const Selection = document.getElementById('CharacterSelection')

    //characters are nestled inside array under the index numbers
    Selection.innerHTML =''
        characters.forEach((shinobi, index) => {
            console.log(shinobi.name)
            const option = document.createElement('option');
            option.value = index;//the value needed
            option.textContent = shinobi.name
            Selection.appendChild(option);
        })
}
document.querySelector('CharacterSelection').addEventListener('change', function () {
    const index = this.value;//from HTML 
    if (index === "")
        return
    const shinobi = characters[index];
    const profile = document.getElementById('singleprofile')
    //console.log(profile)
})
//const singlecharacter = characters[index];

//singleprofile information to display
//some characters images or sex/village/clan. "?" according to w3 and google webbrowsing..avoid code from crashing if 
//a request is not available
//'N/A or unkwnown' is to prevent undefined to showed up on profile

profile.innerHTML = `
  <div class="info">
  <img src="${shinobi.images?.[0] || ''}" atl="${shinobi.name}">
    <h2>${shinobi.name}</h2>
     <p><strong>Gender:</strong> ${shinobi.personal.sex || 'N/A'}</p>
    <p><strong>Birthday:</strong> ${shinobi.personal.birthdate || 'Unknown'}</p>
     <p><strong>Birthday:</strong> ${shinobi.personal.affiliation || 'N/A'}</p>
    <p><strong>Village:</strong> ${shinobi.personal.village || 'Unknown'}</p>
    <div

      `;
profile.style.display = 'block';





// Click button have to click first before the select drop down menu can display characters.
//as I was having issues controlling the amount of requests sent out and ended up maxing out requests by 15 apis.
//Oussama set event on click to help control issue.

let button = document.querySelector(".click") //click to enable drop down menu for shinobi selection
button.addEventListener("click", getdata)
//const namebanner = document.createElement("div")

let ninja = setTimeout(shinobi, 2000)
export {ninja, profile}