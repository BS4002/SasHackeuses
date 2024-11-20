//exercice11
console.log("EXERCICE 11");
let tableau=[1,2,3,4,5];
for(let i of tableau){
    console.log(i)
}
console.log("--------------------------------------------")
//exercice12
console.log("EXERCICE12:")
let tableau2=[1,2,3,4,5,6,7,8,9,10];
let pairs=tableau2.filter(function(n){
    return n%2===0;
});
console.log(pairs);
console.log("--------------------------------------------")
//exercice13
console.log("EXERCICE13:")
let a=[1,2,3];
let b=[4,5,6];
let c=a.concat(b);
console.log(c);
console.log("--------------------------------------------")
//exercice14
console.log("EXERCICE14:")
let t=["apple","banana","cherry","date"];
t.splice(1,1);
console.log(t);
console.log("--------------------------------------------")
//exercice15
console.log("EXERCICE15:")
let numbers=[5,1,8,4,7];
numbers.sort();
console.log(numbers);
console.log("--------------------------------------------")
//exercice16
console.log("EXERCICE16:")
let t1=[1,2,3,4];
let double=t1.map(function(nb){
    return nb*2;
})
console.log(double);


