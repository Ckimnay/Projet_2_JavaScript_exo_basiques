console.log("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");

espace = " ";
diese = "#";

height = prompt("Salut, Bienvenue dans ma super pyramide ! Combien d'étages veux-tu ? ");

    for(let i = 1; i <= height; i++) {

console.log(espace.repeat(height -i) + (diese.repeat(i)));

}


