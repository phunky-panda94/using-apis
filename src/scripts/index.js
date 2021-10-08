import apiKey from '../../api.js';

const img = document.querySelector('img');
const refresh = document.querySelector('button');
const search = document.querySelector('form');

let keyword = 'cats';

const fetchData = async (keyword) => {
    
    let data = `https://api.giphy.com/v1/gifs/translate?api_key=${apiKey}=${keyword}`

    const response = await fetch(data, {mode: 'cors'})
    const responseData = await response.json();
    img.src = responseData.data.images.original.url;

}

// add search 
const searchKeyword = (event) => {

    event.preventDefault();

    keyword = search.elements['searchTerm'].value;
    fetchData(keyword);

    search.reset();

}

// add event listeners
refresh.addEventListener('click', () => fetchData(keyword));
search.addEventListener('submit', searchKeyword);

fetchData(keyword);
