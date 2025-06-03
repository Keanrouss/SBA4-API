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
const url = 'https://anime-db.p.rapidapi.com/anime?page=1&size=10&search=Fullmetal&genres=Fantasy%2CDrama&sortBy=ranking&sortOrder=asc';
const options = {
	method: 'GET', //none of the API were working for me. got from RapiAPI and it came with GET. Not 100% familiar
	headers: {
		'x-rapidapi-key': '236e810a85msh3c07efd6077ebc7p1e1626jsn0a492c5f13d4',
		'x-rapidapi-host': 'anime-db.p.rapidapi.com'
	}
};

try {
    const response = await fetch(url , options);
	const data = await response.json();
    let ranking = data.data[0].ranking
    for (let i = 0; i < 9; i++) {
             ranking += data.data[i].ranking
             console.log(ranking)
              if (ranking > 9000) {
            console.log('Favorite episode to watch later!')
        } else if(ranking < 7000) {
            console.log("Just a terrible video!")
        }
    }
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
} catch (error) {
	console.error(error);
}
}
getdata()