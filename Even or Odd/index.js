let number = [1,25,86,45,33,15,24,]
function oddEven(arr,type) {
    if (type==="even") {
            return arr.filter(num =>num%2==0)
    } else if (type==="odd") {
        return arr.filter(num =>num%2!=0)
    }
    else{
        return("there is nothing odd or even number")
    }
    
        
    
    
    
}
console.log(oddEven(number,"even"));