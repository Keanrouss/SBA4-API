let body = document.querySelector('body')
let artwork = document.createElement('Image')
body.appendChild(artwork)
//artwork.src="data:image/gif;base64,R0lGODlhBgAFAPQAAC48TFNsX0NW…AAAAGAAUAAAUYYGNxUhFcWFctxoM4WXQwAgFNyQAom0aFADs="
//artwork.src="https://api.artic.edu/api/v1/artworks/41399"

async function getdata() {
const response = await fetch(('https://api.artic.edu/api/v1/artworks/'))
try {
        if (response.ok) {
           let results = await response.json()
           .then(data=> {
            for(let i = 0; i<11; i++){
              console.log(data.data[i].title)
            }
            //data.data[2].title
          } )
           
           // console.log(response)
        } else {
           console.log('bad artworks')

       }

  } catch (error) {

 }
}
let button = document.querySelector(".click")
button.addEventListener("click",getdata)
//getdata()