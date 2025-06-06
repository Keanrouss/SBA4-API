//has the API information for this SBA
//async function getdata() {
    //const response = await fetch((' http://discord.jikan.moe.'))

    //try {
        //if (response.ok) {
           // let results = await response.json()
            //console.log(results)
        //} else {

       // }

   // } catch (error) {

   // }
//}

//getdata()
async function getdata() {
//const url = ('https://dattebayo-api.onrender.com');
//const options = {
	//method: 'GET', //none of the API were working for me. got from RapiAPI and it came with GET. Not 100% familiar
//};

try {
    const response = await fetch('https://dattebayo-api.onrender.com/characters');
	const data= await response.json()
    const characters = data.characters
    //console.log(characters)
    //display the names and the intented data to create the profile card for characters// 
    // the for(let character of characters) don't know how to navigate that. More comfortable with let i etc..loop
    for(let character of characters){
        //console.log(characters)

    //}
        //for (let i =0; i<characters.length; i++) {
            //console.log(data.characters[i])
            //console.log(data.characters[i].personal.birthdate) //personal provide the info (dob, sex, clan,classification)
            //console.log(data.characters[i].personal.clan)
            //console.log(data.characters[i].images)
            //some characters have no clan, therefore undefined is not wrong.
            //just no clan informaton for these characters. Will write Not available.
            }
            //to narrow down what the users need to input to get data about characters.
            //declare a new variable to run the condition..Leave it empty?.....
            const userinput = ""
            //Making sure input matched exactly how char. name is written
            const selectedcharacter = characters.some(char => char.name.toLowerCase()=== userinput.toLowerCase)
             if (userinput) {
            console.log("Proper character selected")
        } else{
           console.log("Put Naruto anime main characters only")
     }
   
}catch(error) {
	console.error(error);
}
}
let button = document.querySelector(".click")
button.addEventListener("click", getdata)
//getdata()





