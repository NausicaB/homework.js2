console.log('main.js loaded...');

/**
 * Function "getDigits" with one parameter
 * @param {string} char 
 * @returns only the digits from the string
 */

 function getDigits(char){
    let result = '';
    for(let i = 0; i <= char.length; i++) {
        if(char[i] >= '0' && char[i] <= '9'){
            result = result + char[i];
        }
    }
    console.log(result);
    return result;
}
getDigits('1ag6b7n5m9');


/**
 * Function "getLetters"
 * @param {string} char 
 * @returns only the characters from the string
 */

 function getLetters(char){
    let result = '';
    for(let i = 0; i <= char.length; i++) {
        if((char[i] >= 'a' && char[i] <= 'z') || (char[i] >= 'A' && char[i] <= 'Z')){
            result = result + char[i];
        }
    }
    console.log(result);
    return result;
}
getLetters('ASD123FGHJKL');


/**
 * Function "getFirst5Letters" with one parameter:
 * @param {string} char 
 * @returns the first 5 letters
 */

function getFirst5Letters(char){
    let result = '';
    let letters = getLetters(char);
    console.log(letters);

    for (let i = 0; i < 5; i++){
        result = result + letters[i];
    }
    console.log(result);
    return result;
}
getFirst5Letters('as123dfgh123jkl');


/**
 * Function "concatenate" with one parameter:
 * @param {array} list 
 * @returns the list of string concatenated
 */

 function concatenate(list){
    let result = '';
    for (let i = 0; i < list.length; i++){
        result = result + list[i];
    }
    console.log(result);
    return result;
}
concatenate(['aasd','asd']);


/**
 * Function "getAllDigits" with one parameter:
 * @param {array} list 
 * @returns the digits from the list of strings concatenated
 */


//returns only the digits from the list of strings
function getDigits(char){
    let result = '';
    for(let i = 0; i <= char.length; i++) {
        if(char[i] >= '0' && char[i] <= '9'){
            result = result + char[i];
        }
    }
    return result;
}

//return the digits from the list of strings concatenated
function getAllDigits(list){
    let listConcatenated = concatenate(list);
    let result = getDigits(listConcatenated);
    console.log(result);
    return result;
}
getAllDigits(['ernj7', 'gre5qwdf3', '12few5f4']);


/**
 * Function "invertAllStrings" with one parameter:
 * @param {array} list 
 * @returns the list of strings reversed
 */


function invertAllStrings(list){
    let result = [];
    for (let i = 0; i < list.length; i++) {
        let itemConcatenated = '';
        let item = list[i].split('');
        let itemReversed = item.reverse();
        itemConcatenated = concatenate(itemReversed);
        result.push(itemConcatenated);
    }
    console.log(result);
    return result;
}
invertAllStrings(["a1","b2","c3"]);


/**
 * Function "factorial" with one parameter
 * @param {number} number 
 * @returns returns the factorial of the number
 */

 function factorial(number){
    let result = 1;
    for (let i = number; i > 0; i--){
        result = result * i;
    }
    console.log(result);
    return(result);
}
factorial(5);


/**
 * Function "cmmdc" with 2 paramters:
 * @param {number} nr1 
 * @param {number} nr2 
 * @returns the greatest common factor;
 */

 function cmmdc(nr1, nr2){
    if(nr1 > nr2){
        let aux = nr1;
        nr1 = nr2;
        nr2 = aux;
    }
    for(let i = nr1; i > 0; i--)
    if(nr1 % i === 0 && nr2 % i === 0){
        console.log(`${i} is the greatest common factor of ${nr1} and ${nr2}`);
        return i;
    }
}
cmmdc(12,16);


/**
 * Function cmmdc with 2 parameters:
 * @param {number} nr1 
 * @param {number} nr2 
 * @returns returns the least common multiple
 */

function cmmmc(nr1,nr2){
    let communDiv = cmmdc(nr1, nr2);
    let result = (nr1 * nr2)/communDiv;
    console.log(result);
    return(result);
}
cmmmc(2,3);


/**
 * Function "divizori" with one parameter:
 * @param {number} nr 
 * @returns an array with all the divisors
 */

 function divizori(nr){
    let arr = [];
    for (let i = 2; i < nr; i++){
        if (nr % i === 0)
        arr.push(i);
    }
    console.log(arr);
    return arr;
}
divizori(64);


/**
 * Function "palindrom" with one paramter:
 * @param {number} nr 
 * @returns if the number is palidrome
 */

 function palindrom(nr){
    let newNr = 0;
    let n = nr;
    for (let i = n.toString().length; i >= 0; i--){
        let lastDigit = n % 10;
        newNr = newNr + lastDigit * Math.pow(10, (n.toString().length-1));
        n = Math.floor(n / 10);
    }
    console.log(newNr);
    if (nr === newNr){
        console.log(`${nr} is palindrome`);
        return true;
    }
    console.log(`${nr} is not palindrome`);
    return false;
}
palindrom(63);


/**
 * Function "sort" with one parameter:
 * @param {array} arr 
 * @returns the even numbers from the array sorted
 */

 function sort(arr){
    for (let i = 0; i < arr.length; i++){
        if (arr[i] % 2 != 0){
            arr.splice(i,1);
        }
    }
    arr.sort((function(a, b){return a-b}));
    console.log(arr);
    return(arr);
}
sort([4,8,6,-1,-2,-3,30,0]);


/**
 * Function "sortAscDesc" with one parameter:
 * @param {array} arr 
 * @returns the even numbers sorted in ascending order and the odd numbers in descending order
 */

function sortAscDesc(arr){
    let arr1 = [];
    let arr2 = [];

    for (let i = 0; i < arr.length; i++){
        if (arr[i] % 2 === 0){
            arr1.push(arr[i]);
        }
    }
    arr1.sort((function(a, b){return a-b}));
    console.log(arr1);

    for (let i = 0; i < arr.length; i++){
        if (arr[i] % 2 !== 0){
            arr2.push(arr[i]);
        }
    }
    arr2.sort((a,b)=>b-a)
    console.log(arr2);
    let finalArr = arr1.concat(arr2);
    console.log(finalArr);
    return(finalArr);
}
sortAscDesc([4,7,17,8,6,-1,-2,-3,30,0]);


/**
 * Function "binarySearch" with 2 parameters:
 * @param {array} array 
 * @param {number} key 
 * @returns if the number provided as parameter is included in the array
 */

function binarySearch(array, key){
    let start = 0;
    let end = array.length - 1;
    for (let i = 0; i < array.length; i++){
        let middle = Math.floor((start + end) / 2);
        if (key === array[middle]){
            console.log(`${key} is part of the ${array}`);
            return true;
        }
        else if (array[middle] < key){
            start = middle + 1;
        }
        else 
            end = middle - 1;
    }
    // key wasn't found
    return false;
}

binarySearch([1,2,3,4,5], 5);


/**
 * Function "countBinarySearch" with 2 parameters:
 * @param {array} array 
 * @param {number} key 
 * @returns how many times the function was called
 */

function countBinarySearch(array, key){
    let start = 0;
    let end = array.length - 1;
    let counter = 0;
    for (let i = 1; i < array.length - 1; i++){
        counter ++;   
        let middle = Math.floor((start + end) / 2);
        if (key === array[middle]){
            console.log(`the function was called ${counter} times`);
            return counter;
        }
        else if (array[middle] < key && start < end){
            start = middle + 1;
        }
        else 
            end = middle - 1;
        
        }
    console.log(`the function was called ${counter} times`);
    return counter;
}

countBinarySearch([1,2,3,4,5], 1);