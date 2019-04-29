'use strict';

function sumToF(n){
  let sum=0;
  for (let i = 0; i <= n; i++) {
    sum += i;
    
  }
  return sum;
}



function sumToR(n){
  if(n==1){
    return 1;
  }
  return n + sumToR(n-1);
}



function sumToMath(n){
  return n*(n+1)/2;
}


function benchMark (fn){
  let n=100; 
  for (let i = 0; i < 100000; i++) {
    return fn(n);
  }
}


// let sumF=0;
// let sumR=0;
// let sumM=0;



// benchMark(sumToF);
// benchMark(sumToR);
// benchMark(sumToMath);


// for (let i = 0; i < 10; i++) {
//  sumF += benchMark(sumToF);
//  sumR += benchMark(sumToR);
//  sumM += benchMark(sumToMath);
// }


console.log("forLoop:"+ benchMark(sumToF));
console.log("recursion:"+ benchMark(sumToR));
console.log("arithmetic:"+ benchMark(sumToMath));



function fib(n) {
  let x = 1;
  let y = 1;
  for (let i = 3; i <= n; i++) {
    let z = x + y;
    x = y;
    y = z;
  }
  return y;
}

console.log(fib(3));
console.log(fib(7));
console.log(fib(77));



let list ={
  value:1,
  next:{
    value:2,
    next:
    {
      value:3,
      next:{
        value:4,
        next:null
      }
    }
  }
};

function PrintListL(list){
    let i =list;
    while(i){
      console.log(i.value);
      i=i.next;
    }
}

PrintListL(list);



function printList(list) {

  console.log(list.value);

  if (list.next) {
    printList(list.next); 
  }

}

printList(list);

function bench(fn1){
  
  for (let i = 0; i < 100; i++) {
    return fn1(list);
    
  }
}


// let printL = 0;
// let printR = 0;

// bench(printL);
// bench(printList);

// for (let i = 0; i < 10; i++) {
//   printL += bench(PrintListL);
//   printR += bench(printList);
  
// }

console.log("forLoop:"+bench(PrintListL));
console.log("recursion:"+bench(printList));





// function printReverseList(list){
//   let arr =[];
//   let step =list;
//   while(step){
//     arr.push(step.value);
//     step = step.next;
//   }

//   for (let i=arr.length-1; i>= 0;i++) {
//     console.log(arr[i]);
    
//   }
// }

// printReverseList(list);



function printReverseListR(list){
  if (list.next) {
    console.log(printReverseListR(list.next));
  }
  console.log(list.value);
}

printReverseListR(list);