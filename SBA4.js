async function getdata() {
    try {
        const response = await fetch('https://dattebayo-api.onrender.com/characters');
        const data = await response.json()
        const characters = data.characters
//collect all needed character informations
for (let character of characters) {
      console.log(`Name: ${character.name}`);
      console.log(`Gender: ${character.personal.sex}`);
      console.log(`Birthdate: ${character.personal.birthdate}`);
      console.log(`Village: ${character.personal.affiliation[0]}`)
      console.log(`Clan: ${character.personal.clan}`);
    }
            let selectcharacter =""
            if (selectcharacter) {
            console.log("Proper character selected")
           } else {
            console.log("Please Select a character")
           }  

        }catch (error) {
            console.error(error);
        }
    }
let button = document.querySelector(".click")
    button.addEventListener("click", getdata)
//getdata()





