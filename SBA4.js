let characters = [];

// Click button(maybe 2x or my PC is just slow) but still have to click first before the select drop down menu can display characters.
//as I was having issues controlling the amount of requests sent out and ended up maxing out requests by 15 apis.
//Oussama set event on click to help control issue.
async function getdata() {
  const response = await fetch('https://dattebayo-api.onrender.com/characters');
  const data = await response.json();
  characters = data.characters;


  const selection = document.getElementById('CharacterSelection');
  selection.innerHTML = '<option value="">--Select a Character--</option>';


  characters.forEach((shinobi, index) => {
    const option = document.createElement('option');
    option.value = index;
    option.textContent = shinobi.name;
    selection.appendChild(option);
  });
}


document.getElementById('CharacterSelection').addEventListener('change', function () {
  const index = this.value;
  if (index === "") return;


  const shinobi = characters[index];
  const profile = document.getElementById('singleprofile');

//some characters images or sex/village/clan. "?" according to w3 and google webbrowsing..avoid code from crashing if 
//a request is not available
  profile.innerHTML = ` 
    <div class="info">
      <img src="${shinobi.images?.[0] || ''}" alt="${shinobi.name}">
      <h2>${shinobi.name}</h2>
      <p><strong>Gender:</strong> ${shinobi.personal?.sex || 'N/A'}</p>
      <p><strong>Birthday:</strong> ${shinobi.personal?.birthdate || 'Unknown'}</p>
      <p><strong>Affiliation:</strong> ${shinobi.personal?.affiliation || 'N/A'}</p>
      <p><strong>Village:</strong> ${shinobi.personal?.village || 'Unknown'}</p>
    </div> 
  `;


  profile.style.display = 'block';
});

document.querySelector(".click").addEventListener("click", getdata);
// Click button(maybe 2x or my PC is just slow) but still have to click first before the select drop down menu can display characters.
//as I was having issues controlling the amount of requests sent out and ended up maxing out requests by 15 apis.
//Oussama set event on click to help control issue.




