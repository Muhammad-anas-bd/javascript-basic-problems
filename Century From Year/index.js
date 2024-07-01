// function find_Century(year) {
//    const century = Math.ceil(year/100);
//    return century
    
// }
// console.log(find_Century());

function waterLiter(hour) {
   const amountWater = Math.floor(hour/2)
   return amountWater;


   
}
console.log(waterLiter(11.8));

function divided(n,x,y) {
   if (n%x===0 && n%y===0) {
      return true;
      
   } else {
      return false;
      
   }
   
}
console.log(divided(5,3,1));