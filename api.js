const root = document.querySelector('#root');
const buttton = document.querySelector('button');


function createItem(item){
    //card
    const card = document.createElement('div');
    card.classList.add('card');

    //Photos
    const photo = document.createElement('img');
    photo.src = item.thumbnailUrl;

    //Title
    const title = document.createElement('h4');
    title.innerHTML = item.title;
    card.appendChild(photo);
    card.appendChild(title);
    root.appendChild(card);

}




function displayImages(items){
    items.forEach(function(item) {
        createItem(item);
    });
//    console.log(photos);
    
}


buttton.addEventListener('click',function(){
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then((res) => res.json())
    .then((items) => {
    
      displayImages(items);
    
    })

} )






