async function getdata() {
    try {
        const response = await fetch('https://dattebayo-api.onrender.com/characters');
        const data = await response.json()
        const characters = data.characters

        for (let character of characters) {
        }
        const userinput = ""
        const selectedcharacter = characters.some(char => char.name.toLowerCase() === userinput.toLowerCase)
        if (userinput) {
            console.log("Proper character selected")
        } else {
            console.log("Put Naruto anime main characters only")
        }

    } catch (error) {
        console.error(error);
    }
}
let button = document.querySelector(".click")
button.addEventListener("click", getdata)
//getdata()





