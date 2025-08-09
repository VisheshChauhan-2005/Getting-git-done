let rand=Math.random();
let first,second,third;
// 0 .33 .66 1 //

// Lets generate the first w
if (rand < .33) {
    first="crazy";
}else if(rand <=.33 && rand <.66){
    first="amazing";
}else{
    first="fire";
}
//Lets generate the second word //

rand=Math.random();
if (rand < .33) {
    second="engine";
}else if(rand <=.33 && rand <.66){
    second="food";
}else{
    second="garment";
}
//Lets generate the third word //
rand=Math.random();
if (rand < .33) {
    third="bros";
}else if(rand <=.33 && rand <.66){
    third="limited";
}else{
    third="hub";
}

console.log(`${first} ${second} ${third}`);