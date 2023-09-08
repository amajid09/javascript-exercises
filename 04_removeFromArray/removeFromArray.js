const removeFromArray = function() {
   let args = [...arguments]
   if(args.length > 2 || typeof args[0] != "number" || typeof args[1] != "number"){
    return 'ERROR'
   }
   let start = (args[0] < args[1]) ? args[0] : args[1];
   let end = (args[0] > args[1]) ? args[0] : args[1];
   let sum = 0;
   for(let i = start; i <= end; i++ ){
    sum+= i
   }
   return sum

};
console.log(removeFromArray(1, 4))
// Do not edit below this line
module.exports = removeFromArray;
