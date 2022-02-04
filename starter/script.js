'use strict';
let mess=document.querySelector(".message").innerText;
console.log(mess);
const secret_number=Math.floor ( Math.random () *20) +1;
console.log(secret_number)


// console.log(check);
document.querySelector(".check").addEventListener("click",function(){
    let guess=document.querySelector(".guess").value;
    console.log(guess);
    if(guess == secret_number){
        document.querySelector(".message").textContent="✔ correct Number";
        let show=document.querySelector(".score").innerHTML;
        let show_result=document.querySelector(".score").textContent=++show;
        document.querySelector(".number").textContent=secret_number;
        document.querySelector('body').style.background="green";

} else if(guess > secret_number){
        document.querySelector(".message").innerHTML="👆 too high!"; 
       let show=document.querySelector(".score").innerHTML;
       let show_result=document.querySelector(".score").innerHTML=--show;
    }
       else if (guess < "0"){
            document.querySelector(".message").innerHTML="⛔ No number!";  
    }else if(guess < secret_number){
        document.querySelector(".message").innerHTML="👎 too low!";
        let show=document.querySelector(".score").innerHTML;
        let show_result=document.querySelector(".score").innerHTML=--show;

      }else{
document.querySelector(".message").innerHTML="oops";

      }
      
 scores();
});
function scores(){
    document.querySelector(".score").innerHTML;
 if(show_result == 0){
    document.querySelector(".message").innerHTML="you lost the game";
    document.querySelector('body').style.background="pink";
}
};


function start_over(){
    document.querySelector(".message").textContent="start guessing...";
    document.querySelector(".score").textContent="20";
    document.querySelector(".highscore").textContent="0";
    document.querySelector(".number").textContent="?";
    document.querySelector(".guess").value=" ";
    document.querySelector('body').style.background="#222";
    
}
document.querySelector(".again").addEventListener("click",function(){
    start_over();
})

// console.log(this);
// var first="ayo";

// let last="bolu";

// const third="kemi"
// let my_name ="ayo";
// function first(){  
//     let age=30;
//     if(age<30){
// let decade=3;
// const millenial=true;

//     }
//     console.log(`${millenial}`);

// function sec(){
//     const job='teacher';
//     console.log(my_name,age,job)
// }
// sec();
// }
// first()
// console.log(me);
// console.log(job);
// console.log(year)
// var me="eal";
// let job="teacher";
// const year=2013;
// AddDec(2,3);
// addExp()

// console.log(addup(2,3));
// console.log(x(4,6));
// console.log(addExp(4,8));
// function addup(a,b){
//     return a+b;
// }
// let x=function(a,b){
//     return a+b;
// }
// let addExp=(a,b) =>  a+b;
//------hoisting------//
// if(!product){
//     deleteS();
// }
// var product=10;
// function deleteS(){
// console.log("all product deleted");

// }
// let y=function(){
// console.log(this);
// }
// y();
// let addEx=(a,b) =>  a+b;
// console.log(this);
var age=33;
let obj={
    age:12,
    f_name:"ola",
    calcAge:function(){
        console.log(this);
    },
    greet:()=>{
     console.log(this.age);
    console.log(this);
    }
}
obj.greet();
obj.calcAge();
