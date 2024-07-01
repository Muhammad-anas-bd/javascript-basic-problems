
//This is with increament(num++) 
function Multiplier(number) {
    let sum = 0;
    for (let num = 3; num<number;num++) {
        if (num%3===0 || num%5===0) {
            sum+=num
            
        }  
    }
    return sum
    
}
console.log(Multiplier(25));

//This is with decrement(num--) 
function multiPlier(number) {
    let sum = 0;
    for (let num = 10; num>number;num--) {
        if (num%3===0 || num%5===0) {
            sum+=num
            
        }  
    }
    return sum
    
}
console.log(multiPlier(3));