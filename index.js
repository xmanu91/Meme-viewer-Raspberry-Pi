const img = document.querySelector('img');
const tagSelector = document.querySelector('select');
let tag = 'all';

setInterval(() => {
  img.setAttribute('src','http://localhost:5000/')
}, 100000)

/*tagSelector.addEventListener('change', (e) => {
  if(e.target.selectedOptions[0].value != 'latest'){
    img.setAttribute('src','http://localhost:5000/'+ e.target.selectedOptions[0].value)
  }else{
    img.setAttribute('src','http://localhost:5000/')
  }
})*/