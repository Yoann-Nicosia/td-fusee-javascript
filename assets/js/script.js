// Valeur par défaut position du carré
let margTop = 50;
let margLeft = 50;

// Fonction flèches qui déplacent le carré
window.addEventListener("keydown", function (event) {
    let carre = document.querySelector('#square');
    if (event.defaultPrevented) {
      return; // Ne devrait rien faire si l'événement de la touche était déjà consommé.
    }
  
    switch (event.key) {
      case "ArrowDown":
        margTop += 20;
        carre.style.top = `${margTop}px`;
        // Faire quelque chose pour la touche "flèche vers le bas" pressée.
        break;
      case "ArrowUp":
        margTop -= 20;
        carre.style.top = `${margTop}px`;
        // Faire quelque chose pour la touche "up arrow" pressée.
        break;
      case "ArrowLeft":
        margLeft -= 20;
        carre.style.left = `${margLeft}px`;
        // Faire quelque chose pour la touche "left arrow" pressée.
        break;
      case "ArrowRight":
        margLeft += 20;
        carre.style.left = `${margLeft}px`;
        // Faire quelque chose pour la touche "right arrow" pressée.
        break;
      
      default:
        return; // Quitter lorsque cela ne gère pas l'événement touche.
    }
  
    // Annuler l'action par défaut pour éviter qu'elle ne soit traitée deux fois.
    event.preventDefault();
  }, true);


function changerClasse(){
    let button1 = document.getElementById("scaleUp");
    let button2 = document.getElementById("scaleDown");
    let button3 = document.getElementById("shapeCircle");
    let button4 = document.getElementById("shapeSquare");

    if (this.checked) {

        // Activer carré rouge
        document.getElementById("test").classList += " is-active" ;

        // Activer les boutons et changer leurs couleurs
        button1.removeAttribute("disabled");
        button1.classList.remove("btn-light");
        button1.classList.add("btn-primary");

        button2.removeAttribute("disabled");
        button2.classList.remove("btn-light");
        button2.classList.add("btn-primary");

        button3.removeAttribute("disabled");
        button3.classList.remove("btn-light");
        button3.classList.add("btn-primary");

        button4.removeAttribute("disabled");
        button4.classList.remove("btn-light");
        button4.classList.add("btn-primary");  

        


    } else {

        // Désactiver carré rouge
        document.getElementById("test").classList = "redsquare-app" ;

        // remettre le disabled quand le switch est off
        button1.setAttribute("disabled","");
        button2.setAttribute("disabled","");
        button3.setAttribute("disabled","");
        button4.setAttribute("disabled","");

        // remettre la couleur de base quand le switch est off
        button1.classList.remove("btn-primary");
        button1.classList.add("btn-light");
        button2.classList.remove("btn-primary");
        button2.classList.add("btn-light");
        button3.classList.remove("btn-primary");
        button3.classList.add("btn-light");
        button4.classList.remove("btn-primary");
        button4.classList.add("btn-light");
    }
}

function enable() {
    let switchh = document.getElementById("toggleRedSquare");
    switchh.addEventListener("change" , changerClasse);
}

let defaullt = 20;
let borderRadius = 0;

function scaleUp() {
    let carre = document.querySelector('#square');
    defaullt += 20;
    carre.style.padding = `${defaullt}px ${defaullt}px ${defaullt}px ${defaullt}px`;
}

function scaleDown() {
    let carre = document.querySelector('#square');    
    defaullt -= 20;
    carre.style.padding = `${defaullt}px ${defaullt}px ${defaullt}px ${defaullt}px`;
   
}

function shapeCircle(){
    let carre = document.querySelector('#square');
    borderRadius = 1000;
    carre.style.borderRadius = `${borderRadius}px`;
}

function shapeSquare(){
    let carre = document.querySelector('#square');
    borderRadius = 0;
    carre.style.borderRadius = `${borderRadius}px`;
}


// document.querySelector('#square').setAttribute("style","padding : 20px;");

document.getElementById("scaleUp").addEventListener("click",scaleUp);
document.getElementById("scaleDown").addEventListener("click",scaleDown);
document.getElementById("shapeCircle").addEventListener("click",shapeCircle);
document.getElementById("shapeSquare").addEventListener("click",shapeSquare);

enable();