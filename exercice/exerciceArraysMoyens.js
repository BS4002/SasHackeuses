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
