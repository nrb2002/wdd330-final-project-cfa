let items = document.querySelectorAll('.slider .list .item'); //Slider items
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let thumbnails = document.querySelectorAll('.thumbnail .item'); //Thumbnai items

// Config parameter
let countItem = items.length; //The number of items into the series
let itemActive = 0; //The class '.active' counter

//Previous Button click event
prev.onclick = function(){
  itemActive -= 1;

  if(itemActive < 0){
    itemActive = countItem - 1;
  }
  showSlider(); //Run this function to display the slider ont he scrren
}

//Next Button click event
next.onclick = function(){
  itemActive += 1;

  if(itemActive >= countItem){
    itemActive = 0;
  }
  showSlider(); //Run this function to display the slider ont he scrren
}

// Click on thumbnail event
thumbnails.forEach((thumbnail, index) =>{
  thumbnail.addEventListener('click', () => {
    itemActive = index;
    showSlider();
  });
});

//Run the slider automatically without any click
let refreshInterval = setInterval(() => {
  // Execute the next button click automatically every 3s. 
  next.click();
}, 3000);

function showSlider(){
  // Remove item active old
  let itemActiveOld = document.querySelector('.slider .list .item.active');
  let thumbnailActiveOld = document.querySelector('.thumbnail .item.active');
  
  itemActiveOld.classList.remove('active');
  thumbnailActiveOld.classList.remove('active');

  // Set class '.active' to new item
  items[itemActive].classList.add('active');
  thumbnails[itemActive].classList.add('active');

  // Clear automatic slider run
  clearInterval(refreshInterval);
}


