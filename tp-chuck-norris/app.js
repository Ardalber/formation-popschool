'use strict';


/*Objectif: Reproduire un générateur de punchlines "Chuck Norris"

Consignes:
- Dans un tableau, stocker au moins 10 punchlines de Chuck Norris
- A chaque click du bouton
o générer une couleur aléatoire 
o récupérer aléatoirement une des punchlines
o Afficher la nouvelle phrase
o Remplacer l'ancienne couleur du texte/bouton/arrière-plan par la nouvelle*/


const poolFacts = [
    "01 Chuck Norris est en couleur sur les photos Noir et Blanc.", 
    "02 Chuck Norris ne ment pas, c'est la vérité qui se trompe.", 
    "03 Chuck Norris a déjà compté jusqu'à l'infini. Deux fois.", 
    "04 Chuck Norris a dit Va voir la-bas si j'y suis... et il y était...", 
    "05 Chuck Norris est contre les radars : ça l'éblouit lorsqu'il fait du vélo.", 
    "06 Chuck Norris est mort depuis 10 ans, mais la Mort n'a pas encore trouvé le courage d'aller lui dire.", 
    "07 Quand Google ne trouve pas quelque chose, il demande à Chuck Norris.", 
    "08 Chuck Norris va régulièrement voir des matchs du PSG pour ne pas oublier ce qu'est la défaite.", 
    "09 Chuck Norris peut encercler ses ennemis. Tout seul.", 
    "10 Chuck Norris sait parler le braille."
]


function getRandomColor() {
    const color1=Math.floor(Math.random() * 256);
    const color2=Math.floor(Math.random() * 256);
    const color3=Math.floor(Math.random() * 256);
    return 'rgb('+ color1 + ',' +  color2 +',' + color3 +')';
}


const color = getRandomColor();

document.getElementById("butt").style.backgroundColor = color;
document.getElementById("texte").style.color = color;
document.body.style.backgroundColor = color;

document.getElementById("texte").innerHTML = poolFacts[Math.floor(Math.random() * poolFacts.length)];

function colorTout() {

}