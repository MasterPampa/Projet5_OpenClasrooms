const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]
//initialisation du dot pour le futur clique
let currentDot = 0;

//on recupere l'emplacement de la fleche gauche du html
let left_arrow = document.getElementById("left_arrow"); 

//nombre de slides
const slidesList = slides.length;

//on recupere l'emplacement de la div dots du html
const dots = document.querySelector('#dots');

//pour chaque slide on insere un code html dans l'emplacement défini avant
for (let i = 0; i < slidesList; i++) { 
  dots.insertAdjacentHTML('beforeend', '<div class="dot"></div>');
}

//on recupere tout les dots
const alldots = document.querySelectorAll('.dot');

//on applique la class selected en fonction de celui selectionné
alldots[currentDot].classList.add('dot_selected'); 

//creation de variable pour l'image et la tagline
const imageSelected = document.getElementById('banner-img');
const tagLineSelected = document.getElementById('tagLine');

//listeners du click
left_arrow.addEventListener("click", function(previousSlide) { 
	if (previousSlide.button === 0){
		//on retire la class selected en fonction de celui selectionné
		alldots[currentDot].classList.remove('dot_selected'); 
	    currentDot--;
		if (currentDot == -1){
			currentDot = 3;
		  }
		// et on re applique la class au nouveau apres résultat  
		alldots[currentDot].classList.add('dot_selected');

		//changement d'image et de tagline
		imageSelected.src = "./assets/images/slideshow/"+slides[currentDot].image;
		tagLineSelected.innerHTML = slides[currentDot].tagLine;
	    
		//debug du compteur et état actuel
		console.log("Compteur Dot ="+ currentDot);
	}else if (previousSlide.button === 1){
	   	console.log("clique droit sur fleche gauche");
	}
	
});
  
// fonction du click sur l'autre fleche, celle de droite
const right_arrow = document.getElementById("right_arrow"); 
 
right_arrow.addEventListener("click", function(nextSlide) { 
	if (nextSlide.button === 0){
		alldots[currentDot].classList.remove('dot_selected'); 
	  	currentDot++;
	  	if (currentDot == 4){
		  	currentDot = 0;
	  	}
		alldots[currentDot].classList.add('dot_selected');
		
		imageSelected.src = "./assets/images/slideshow/"+slides[currentDot].image;
		
		tagLineSelected.innerHTML = slides[currentDot].tagLine;
	 	
		console.log("clique gauche sur fleche droite" + " /Compteur Dot ="+ currentDot);
  
	}else if (nextSlide.button === 1){
	 	console.log("clique droit");
	}
});