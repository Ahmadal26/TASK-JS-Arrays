/**
 * isArrayLengthOdd(numbers):
 * - receives array `numbers`
 * - returns true if array has an odd number of elements
 * - returns false otherwise
 *
 * e.g.
 * isArrayLengthOdd([1, 2, 3]) -> true
 * isArrayLengthOdd([1, 2, 3, 4]) -> flase
 */
function isArrayLengthOdd(numbers) {
  if (numbers.length%2==1){
return(true);
  }
  return(false);

  }
const arrayofNum = [1,2,3];
console.log(isArrayLengthOdd(arrayofNum));

/**
 * isArrayLengthEven(numbers):
 * - receives array `numbers`
 * - returns true if array has an even number of elements
 * - returns false otherwise
 *
 * e.g.
 * isArrayLengthEven([1, 2, 3]) -> false
 * isArrayLengthEven([1, 2, 3, 4]) -> true
 */
function isArrayLengthEven(numbers) {
  if (numbers.length%2==0){
return(true);
  }
  return(false);

  }
const arrayofNum2 = [1,2,3,4];
console.log(isArrayLengthEven(arrayofNum2));
/**
 * addLailaToArray(instructors):
 * - receives array `instructors`
 * - returns a new array that's a copy of array `instructors` with additional string "Laila"
 *
 * e.g.
 * addLailaToArray(["Mshary", "Hasan"]) -> ["Mshary", "Hasan", "Laila"]
 */
const list =["Mshary","Hasan"];
function addLailaToArray(instructors) {
  
  
  list.push("Laila")
  return list;
}
console.log (addLailaToArray(list));




/**
 * eliminateTeam(teams):
 * - receives array `teams`
 * - removes the last element from the array and return it
 *
 * e.g.
 * eliminateTeam(["Brazil", "Germany", "Italy"]) -> "Italy"
 */
const all = ["Brazil", "Germany", "Italy"];
function eliminateTeam(teams) {
    
    let remove = all.pop();
    return remove
 }
 
 console.log(eliminateTeam(all));
 
/**
 * secondHalfOfArrayIfItIsEven(fruits):
 * - receives array `fruits`
 * - returns a new array that's the second half of the original array if it has an even number of elements
 * - returns an empty array if it has an odd number of elements
 *
 * e.g.
 * secondHalfOfArrayIfItIsEven(["apple", "orange", "banana", "kiwi"]) -> ["banana", "kiwi"]
 * secondHalfOfArrayIfItIsEven(["apple", "orange", "banana", "kiwi", "blueberry"]) -> []
 */
//need some help with this question 
const numx = ["apple", "orange", "banana", "kiwi",];
function secondHalfOfArrayIfItIsEven(fruits) {
   if(fruits.length%2==0){
    return fruits.slice(fruits.length/2);
   }else 
   { return [];

    }
}
console.log(secondHalfOfArrayIfItIsEven(numx));
/**
 * youGottaCalmDown(shout):
 * - receives a string `shout`
 * - returns the string `shout` with at most one exclamation mark (!) at the end.
 *
 * e.g.
 * youGottaCalmDown("HI!!!!!!!!!!") -> "HI!"
 * youGottaCalmDown("Taylor Schwifting!!!!!!!!!!!") -> "Taylor Shwifting!"
 * youGottaCalmDown("Hellooooo") -> "Hellooooo"
 *
 * Hint:
 * - Use number method .indexOf()
 * - Use string method .slice()
 */
//need help with this question 
function youGottaCalmDown(shout) {
   if (shout.includes("!")){
    const index = shout.indexOf("!")
    return shout.slice(0,index+1)
   }
   return shout
}

console.log(youGottaCalmDown("HI!!!!!!!!!!"))
console.log(youGottaCalmDown("Taylor Schwifting!!!!!!!!!!!"))
console.log(youGottaCalmDown("Hellooooo"))