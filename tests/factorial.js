function fact(n) { 
    let res = 1; 
    
    if(n ==0)
        return 1;
    for (let i = 2; i <= n; i++) 
        res = res * i; 
    return res; 
  }
  
  let n = 5; 
  console.log(fact(n));