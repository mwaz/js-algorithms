'use strict'

// uses Log 0^2 time complexity and slightly slower than an insertion sort, has to compare each element in an array with the other

let  bubbleSort = (arrayInput) => {
    let arrayLength = arrayInput.length;
    let tempp;
    let swapped;

   do {
       swapped = false;
       for(let i =0; i< arrayLength; i++){
       if(arrayInput[i] > arrayInput[i+1] ){
           tempp = arrayInput[i]; 
           arrayInput[i] = arrayInput[i+1];
           arrayInput[i+1] = tempp;
           swapped = true;
       }
   }
}
while(swapped)
   return arrayInput
} 


bubbleSort([1,6, 7, 3, 5, 2, 9])