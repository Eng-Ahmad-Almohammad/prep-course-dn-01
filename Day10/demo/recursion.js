// function factLoop(n){
//   let fact = 1;
//   for(let i = n; i > 1; --i){
//     fact = fact * i;
//   }
//   return fact;
// }

// console.log(factLoop(5));

// function fact(n){
//   if( n > 1){
//      return n * fact(n-1);
//   }else{
//      return 1;
//    }
    
  
// }

// console.log(fact(3));


// function countDown(n){
//   for(let i = n; i >= 1; i--){
//     console.log(i);
//   }
// }


// function countDown(n){
//   if(n >= 1){
//     console.log(n);
//     countDown(n-1);
//   }else{
//     return;
//   }
// }
// countDown(4);


function summ(n){
    if(n >= 1){
     return n + summ(n-1);
    }else{
      return 0;
    }
  }
  
  console.log(summ(3))