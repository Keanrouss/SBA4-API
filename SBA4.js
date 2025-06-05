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

//try {
    const response = await fetch('https://dattebayo-api.onrender.com/characters');
	const data= await response.json()
    const characters = data.characters

    console.log(characters)
         for (let character of characters) {
            
            //console.log(characters.characters[i].name)
            //console.log(characters.characters[i].name)
            // data.[2].name
             }
         // data.data[2].title
   
             // if (ranking > 9000) {
            //console.log('Favorite episode to watch later!')
      //  } else if(ranking < 7000) {
           // console.log("Just a terrible video!")
      //  }
   // }
//} catch (error) {
	//console.error(error);
//}
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


