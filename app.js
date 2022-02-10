console.log("Let's get this party started!");
const imgsCol = document.querySelector('#imgs')
const searchBtn = document.querySelector('#searchBtn')
const searchBar = document.querySelector('#search')
const removeBtn = document.querySelector('#remove')
//zHaCXO6TAXa0r4rAnE0bqDlJR9znLs8m

const randomNum = () => Math.ceil(Math.random() * 50);


function randomUrl(giffObj, randomNum){
  const obj = giffObj[randomNum];
  return obj.embed_url
}

function createImg(url){
  const newCol = document.createElement('div');
  newCol.className = 'col-11 col-lg-3 m-1';

  const newDiv = document.createElement('div');
  newDiv.className = 'ratio ratio-16x9';

  const iframe = document.createElement('iframe');
  iframe.src = url;

  newDiv.appendChild(iframe);
  newCol.appendChild(newDiv);
  imgsCol.appendChild(newCol);
}

function getSearch(e) {
  e.preventDefault()
  const val = searchBar.value;
  searchBar.value = '';
  getGiff(val)
}

searchBtn.addEventListener('click', getSearch)

async function getGiff(val) {
  const giff = await axios.get('https://api.giphy.com/v1/gifs/search', {params: {api_key: 'zHaCXO6TAXa0r4rAnE0bqDlJR9znLs8m', q: val}})
  const url = randomUrl(giff.data.data, randomNum())
  createImg(url)
}