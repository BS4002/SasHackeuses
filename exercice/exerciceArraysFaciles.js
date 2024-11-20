console.log("Exercices Faciles");
console.log("--------------------------------------------")
//exercice1
console.log("EXERCICE 1:")
let nombres=[1,2,3,4,5];
console.log(nombres);
console.log("--------------------------------------------")
//exercice2
console.log("EXERCICE 2:")
let fruits=["apple","banana","cherry"];
console.log(fruits[1]);
console.log("--------------------------------------------")
//exercice3
console.log("EXERCICE 3:")
let nbr=[10,20,30,40];
console.log(nbr)
nbr[2]= 50;
console.log(nbr);
console.log("--------------------------------------------")
//exercice4
console.log("EXERCICE 4:")
let fruit=["mango","peach","pear"]
console.log(fruit)
fruit[3]="banana";
console.log(fruit);
console.log("--------------------------------------------")
//exercice5
console.log("EXERCICE 5:")
let element=["dog","cat","bird"]
element.pop();
console.log(element);
console.log("--------------------------------------------")
//exercice6
console.log("EXERCICE6:")
let personne={
    nom:"salma",
    age:20,
    ville:"Casablanca",
};
console.log(personne);
console.log("--------------------------------------------")
//exercice7
console.log("EXERCICE7:")
let person={
    name:"john",
    age:25,   
}
console.log(person);
console.log(person.name);
console.log(person.age);
console.log("--------------------------------------------")
//exercice8
console.log("EXERCICE8:")
let book={
    title:"javaScript101",
    author:"john Doe"
}
book.author="jane Doe";
console.log(book);
console.log("--------------------------------------------")
//exercice9
console.log("EXERCICE9:")
let car={
    make:"Toyota",
    model:"Corolla",
}
car.year="2020";
console.log(car);
console.log("--------------------------------------------")
//exercice10
console.log("EXERCICE10:")
for (let age in person){
    if (person.age) {
        console.log(true);
    }
    else {
        console.log(false);
    }
}



