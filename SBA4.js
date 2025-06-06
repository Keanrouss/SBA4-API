async function getdata() {
    try {
        const response = await fetch('https://dattebayo-api.onrender.com/characters');
        const data = await response.json()
        const characters = data.characters
        characters.forEach((value, key) => {
            let selectcharacter ="characters"
            if (selectcharacter) {
            console.log("Proper character selected")
           } else {
            console.log("Please Select a character")
           }
        })    

        }catch (error) {
            console.error(error);
        }
    }
let button = document.querySelector(".click")
    button.addEventListener("click", getdata)
//getdata()





