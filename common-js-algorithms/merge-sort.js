'use strict'

// Uses Divide and Concur, so basically divide the array into sections and sort then combine them again 

let mergeSortAlgorithm = (unsortedArray) => {
    const middle = Math.floor((unsortedArray.length)/2);
    const leftElements  = unsortedArray.slice(0, middle);
    const rightElements = unsortedArray.slice(middle);
   

    if(unsortedArray.length <= 1){
        return unsortedArray;
      }
    
      let sortedArray = [], leftIndex = 0, rightIndex = 0;

      while(leftIndex < (leftElements.length) && rightIndex <(rightElements.length)){
          if(leftElements[leftIndex] < rightElements[rightIndex]){
              sortedArray.push(leftElements[leftIndex]);
              leftIndex ++;
          }
          else{
              sortedArray.push(rightElements[rightIndex]);
              rightIndex ++;
          }
      }
      let sortedItems = sortedArray.concat(leftElements.slice(leftIndex)).concat(rightElements.slice(rightIndex));
      return sortedItems

  }

mergeSortAlgorithm([1, 6, 9, 3, 5, 4, 7]);
