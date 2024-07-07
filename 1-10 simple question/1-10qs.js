//1.Return the Next Number from the Integer Passed
function nextNumber(currentNumber) {
    return currentNumber+=1;
    
}
console.log(nextNumber(-2));//-1


//Area of a Triangle 
function areaTringle(hight,base) {
    return hight*base/2
    
}
console.log(areaTringle(4,2));//4

///Convert Age to Days 

function ageInDays(age) {
    if (age>0) {
        return age*365
        
    } else {
        return("The age is undifined")
        
    }

    
}
console.log(ageInDays(35));//12775
console.log(ageInDays(-5)); //The age is undifined


function bitwiseAND(n1, n2) {
    // Use the bitwise AND operator &
    return n1 & n2;
}

function bitwiseOR(n1, n2) {
    // Use the bitwise OR operator |
    return n1 | n2;
}

function bitwiseXOR(n1, n2) {
    // Use the bitwise XOR operator ^
    return n1 ^ n2;
}
console.log(bitwiseAND(5,3));
