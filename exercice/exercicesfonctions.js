//EXERCICE1
function saluer(){
    console.log("Bonjour,tout le monde!");
}
saluer()
console.log("--------------------------")
//EXERCICE2
function saluerNom(nom){
    console.log("Bonjour", nom);
}
saluerNom("salma")
console.log("--------------------------")
//EXERCICE3
function addition(a,b){
    return a+b;
}
console.log("a+b=", addition(3,5));
console.log("--------------------------")
//EXERCICE4
function afficherMessage(message){
    console.log(message);
}
afficherMessage("hello world");

console.log("--------------------------")
//EXERCICE5
function saluerInvite(nom="invite"){
    console.log("bonjour",nom);
}
saluerInvite("laura");
console.log("--------------------------")
//EXERCIXE6
function multiplication(a,b){
    return a*b;
    
}
console.log("a*b=",multiplication(7,2));
console.log("--------------------------")
//EXERCICE7
function soustraction(a,b){
    return a-b;
}
console.log("a-b=",soustraction(1,1))
console.log("--------------------------")
//EXERCICE8
console.log("a-b=",soustraction(2,1))
console.log("--------------------------")
//EXERCICE9
function estPair(n){
     if (n%2==0){
        console.log(true);
    }
    else {console.log(false);
    }
}
console.log(estPair(2))
console.log(estPair(1))
console.log(estPair(5))
console.log("--------------------------")
//EXERCICE10
function IFE(){
    console.log("hello from IFE");
}
IFE()
console.log("--------------------------")
//EXERCICE11
function additionnerTous(a,b){
    return  a+b;
}
console.log("a+b=",additionnerTous(2,1))

