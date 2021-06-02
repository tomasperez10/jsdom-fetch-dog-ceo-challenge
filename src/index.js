console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

function fetchImg(images) {
  return fetch(imgUrl)
  .then(resp => resp.json())
  .then(json => renderBooks(json));

  images.forEach(image => {
    const img = document.createElement('img');
    img.innerHTML = image;
    main.appendChild(img);
  });

}

const breedUrl = 'https://dog.ceo/api/breeds/list/all'

function fetchBreed(breeds) {
  return fetch(breedUrl)
  .then(resp => resp.json())
  .then(json => renderBooks(json));

  breeds.forEach(breed => {
    const ul = document.createElement('ul');
    ul.innerHTML = breed.name;
    main.appendChild(breed);
  });


}
