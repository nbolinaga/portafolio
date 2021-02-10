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
});

der.addEventListener('click',function(){
    if(currentImg == 2){
        currentImg = 0
        imgContainer.style.backgroundImage = "url(" + imagenes[currentImg] + ")";
    } else {
        currentImg += 1
        imgContainer.style.backgroundImage = "url(" + imagenes[currentImg] + ")";
    }
});

var skills = {
    "HTML": 95,
    "CSS": 95,
    "ILLUSTRATOR/PHOTOSHOP": 90,
    "VUE": 85,
    "JAVACRIPT": 80,
    "PYTHON": 80,
    "JAVA": 75,
    "UI/UX": 70,
    "ANGULAR": 65,
}

var skillEl = document.getElementById('skills');

for(key in skills){
    var skill = document.createElement('div');
    skill.setAttribute('class','skill-container');
    var bar = document.createElement('div');
    bar.setAttribute('class', 'skill-bar');
    var fill = document.createElement('div');
    fill.setAttribute('class', 'skill-fill');
    fill.style.width = (skills[key] + '%');
    var fillTitle = document.createElement('p');
    fillTitle.setAttribute('class', 'fill-title')
    var title = document.createElement('h4');
    title.setAttribute('class', 'skill-title');
    
    fillTitle.innerHTML = skills[key] + '%';
    title.innerHTML = key;

    
    fill.append(title);
    skill.append(bar);
    bar.append(fill);
    bar.append(fillTitle)

    skillEl.append(skill);
}

var nameInput = document.getElementById('name');
var emailInput = document.getElementById('email');
var message = document.getElementById('message');

document.getElementById('form').addEventListener('submit', function (e) {

    //prevent the normal submission of the form
    e.preventDefault();

    console.log(`Nombre: ${nameInput.value}`);    
    console.log(`Email: ${emailInput.value}`);    
    console.log(`Mensaje: ${message.value}`);    
});