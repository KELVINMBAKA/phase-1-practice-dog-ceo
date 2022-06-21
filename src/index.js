
document.addEventListener('DOMContentLoaded', () => {
    const imageUrl = "https://dog.ceo/api/breeds/image/random/4";
    fetch(imageUrl)
    .then((res) =>res.json())
    .then(json=> addImagesToPage(json.message));
    const breedsUrl = 'https://dog.ceo/api/breeds/list/all'
    fetch(breedsUrl)
    .then((res)=> res.json())
    .then((json)=> addBreedsToPage(json.message))


  }); 

  function addImagesToPage(images) {
   const imageContainer= document.getElementById('dog-image-container')
   images.forEach(imageUrl)=> {
    const image =document.createElement('img');
    image.src=imageUrl;
 imageContainer.append(image)

   });
  } 


  
function addBreedsToPage(breeds){
    const breedsArray =[];
    
  
     Object.entries(breeds).forEach(breedInfo) =>{
        const[baseBreed ,subBreedlist]=breedInfo;
      addBreedToList(baseBreed);

      subBreedlist.forEach( (subBreed) =>{

        addBreedToList(`${subBreed} ${baseBreed}`)
     });
     });
} 


function addBreedToList (breed) {
    const breedsContainer = document.getElementById('dog-breeds');
    const breedItem= document.createElement('li');
    breedItem.innerText=breed;
    breedsContainer.append(breedItem)
}
