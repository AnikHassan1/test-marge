// var i = 1;
// var sum = 0;
// while (i <= 5) {

//     sum = sum + 1;
//     i = i + 1;
//     document.write("<br>",i);
// }
// document.write(sum);
// for (var i = 1; i <= 10; i = i + 2) {
//     document.write("<br>", i)
// }
// var i=1;
// do{
//     document.write(i);
//     i++;
// }
// while(i<=10)
// var i=0;
// do{
// document.write(i);
// i++;
// }while(i<=100);

// let x="        anik            ";
// let y=x.trim();

// // let z = x.concat(" ",y);
// document.write(x.length)
// document.write(y.length)


//object
let car ={
    name:"Bmw",
    Price:"16Lakh",
    Color:"Black",
    
}
let Men ={
      Color:"BLack",
      height:"5'2",
      Age:21,
      weight:58,
     name :function(){
         return this.Color;

     }
}
console.log(car.name);
console.log(Men.name());