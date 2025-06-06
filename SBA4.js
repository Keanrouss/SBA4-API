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
    console.log(characters)
    //display the names and the intented data to create the profile card for characters// 
    // the for(let character of characters) don't know how to navigate that. More comfortable with let i etc..loop
         for (let i =0; i<characters.length; i++) {
            console.log(data.characters[i])
            console.log(data.characters[i].personal) //personal provide the info (dob, sex, clan,classification)
            }
            //to narrow down what the users need to input to get data about characters.
            //declare a new variable to run the condition..Leave it empty?.....
            const userinput = ""
            //Making sure input matched exactly how char. name is written
            const selectedcharacter = characters.some(char => char.name.toLowerCase()=== userinput.toLowerCase)
             if (userinput) {
            console.log("Proper character selected")
        } else{
           console.log("Put Naruto main characters only")
     }
   
}catch(error) {
	console.error(error);
}
}
let button = document.querySelector(".click")
button.addEventListener("click", getdata)
//getdata()



// for (let i = 0; i < 9; i++) {
             //ranking += data.data[i].ranking
//console.log(ranking)
        //if (ranking > 9000) {
           // console.log('Favorite episode to watch later!')
       // } else if(ranking < 2000) {
            //console.log('Just a maybe video!')
       // }
	//const response = await fetch(url , options);
	//const data = await response.json();
	//console.log(data.data[0].ranking);
   // let ranking = data.data[0].ranking
    //console.log(ranking)
    // console.log(data.characters[0].name)
            // data.[2].name


