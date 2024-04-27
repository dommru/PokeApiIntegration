async function fetchData(){
    try{
      const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
  
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
      
      if(!response.ok){
        throw new Error("Pokemon not found");
      }
      const data = await response.json();
  
      // Access and format the text data you want to display
      const pokemonNameText = `<b>Name:</b> ${data.name}`;
      const pokemonTypeText = `<b>Type:</b> ${data.types[0].type.name}`;  // Access the first type
      
      // Loop through stats and build the stats text
      let pokemonStatsText = "";
      for (const stat of data.stats) {
        pokemonStatsText += `<b>${stat.stat.name.replace('-', ' ')}:</b> ${stat.base_stat}<br>`;
      }
  
      // Combine the formatted text into a single string
      const pokemonDetails = `${pokemonNameText}<br> ${pokemonTypeText}<br> ${pokemonStatsText}`;
  
      // Update the text content of the pokemonDetails element
      const detailsElement = document.getElementById("pokemonDetails");
      detailsElement.innerHTML = pokemonDetails;
  
      const pokemonSprite = data.sprites.front_default;
      const imgElement = document.getElementById("pokemonSprite");
      
      imgElement.src = pokemonSprite;
       // Set width and height after the image is loaded
        imgElement.onload = function() {
            this.width = 150;
            this.height = 150;
        };

      imgElement.style.display = "block";
  
    } 
    catch(error){
      console.error(error);
    }
  }
  