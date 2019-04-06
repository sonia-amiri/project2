"use strict";



let date = new Date(2012, 1, 20, 3, 12);
console.log( date );





function getSecondsToday() {
    let now = new Date();
    return now.getHours() * 3600 + now.getMinutes() * 60 + now.getSeconds();
  }

 console.log( getSecondsToday() ); 
  




 
function getSecondsToTomorrow() {

     let now1 = new Date();
     let hour = now1.getHours();
     let minutes = now1.getMinutes();
     let seconds = now1.getSeconds();
     let sumSecondsToday = (hour * 60 + minutes) * 60 + seconds;
     let sumSecondsInADay = 86400;
  
    return sumSecondsInADay - sumSecondsToday;
  }
  
console.log( getSecondsToTomorrow() );





let user = {
    name: "John Smith",
    age: 35
  };

let user1 = JSON.parse( JSON.stringify(user) );
  