const numbers = [3, 2, 5,7,9,10];
 const isPrime = num => { 
    for (let i = 2; i < num; i++){
    if (num % i === 0)
     return false;
     } 
     return num !== 1;
     };
      const myPrimeArray = numbers. filter(element => isPrime(element));
       console. log(myPrimeArray);