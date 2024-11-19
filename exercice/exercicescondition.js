//1
    let x=8;
    if (x%2==0){
        console.log("le nombre est pair");
    }
    else {
        console.log("le nombre est impair");
    }

//2
    let age=40;
    if(age<18){
        console.log("L'age donné est mineure");
    }
    else
    if(age>=18){
        console.log("L'age donné est majeure");  
    }

//2
    let a=10;
    let message=(a>=18)?"vous etes majeure":"vous etes mineure";
    console.log(message);
//3
    let semaine=3;
    switch(semaine){
        case 1:
        console.log("Lundi");
        break;
        case 2:
        console.log("Mardi");
        break;
        case 3:
        console.log("Mercredi");
        break;
        case 4:
        console.log("Jeudi");
        break;
        case 5:
        console.log("Vendredi");
        break;
        case 6:
        console.log("Samedi");
        break;
        case 7:
        console.log("Dimanche");
        break;
        default:
        console.log("introuvable");
    }
//4
    let nbr=0;
    if(nbr>0){
        console.log("Le nombre est positif");
    }else if(nbr<0){
        console.log("Le nombre est négatif ");
    }else{
        console.log("Le nombre est nul");
    }

//5
    let mt=120;
    if (mt>100){
        console.log("le montant à payer est:"+(mt-(mt*10/100)));
    }
//6
    let note=10;

    switch (note)
    {
        case note>=90 && note<=100:
        console.log("execellent");
        break;
        case note>=70 && note<=89:
        console.log("bien");
        break;
        case note>=50 && note<=69:
        console.log("moyen");
        break;
        case note<50 :
        console.log("insuffisant");
        break;
        default :
            console.log("Les appréciation sont possibles de 0 à 100.");

    }
//6
    let nt=50;
    if(90<=nt && nt<=100){console.log("execellent");}
    else if
    (70<=nt && nt<=89){console.log("bien");}
    else if
    (50<=nt && nt<=69){console.log("moyen");}
    else if
    (nt<50){console.log("insuffisant");}
    else
    {console.log("Les appréciation sont possibles de 0 à 100.");}

//7
let g="";
let r="";



