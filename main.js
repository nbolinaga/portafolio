var izq = document.getElementById('izq');
var der = document.getElementById('der');

var imgContainer = document.getElementById('img-container');

var imagenes = [
    './assets/yo.png',
    './assets/avila.png',
    './assets/seattle.png',
]

var currentImg = 0;

izq.addEventListener('click',function(){
  if(currentImg == 0){
    currentImg = 2
    imgContainer.style.backgroundImage = "url(" + imagenes[currentImg] + ")"; 
  } else {
    currentImg -= 1
    imgContainer.style.backgroundImage = "url(" + imagenes[currentImg] + ")";
  }
})

der.addEventListener('click',function(){
    if(currentImg == 2){
        currentImg = 0
        imgContainer.style.backgroundImage = "url(" + imagenes[currentImg] + ")";
    } else {
        currentImg += 1
        imgContainer.style.backgroundImage = "url(" + imagenes[currentImg] + ")";
    }
})