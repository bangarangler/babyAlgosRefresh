// REPLACMENT FOR .PUSH()
//testArr = [1, 2, 3];
//function jPush(arr) {
//let tempArr = [];
//for (let i = 0; i < arr.length; i++) {
//tempArr = [...tempArr, arr[i]];
//console.log(tempArr);
//}
//return tempArr;
//}
//console.log(jPush(testArr));

// REPLACMENT FOR .POP()
//testArr = [1, 2, 3, 4, 5];
//tempArr = [];
//function jPop(arr) {
//console.log(arr.length);
//last = arr.length - 1;
//console.log(last);
//arr.length = arr[arr.length - 2];
//console.log(arr);
//tempArr = arr;
//}
//console.log(jPop(testArr));

// REPLACMENT FOR .UNSHIFT()
// add new items to beginning and returns new length
//let testArr = [1, 2, 3];
//let x = null;
//function jUnshift(arr, x) {
//let tempArr;
//tempArr = [x, ...arr];
//console.log(tempArr);
//return tempArr.length;
//}
//console.log(jUnshift(testArr, 2));

// REPLACMENT FOR .SHIFT()
//const testArr = [2, 3, 4, 5, 6];
//function jShift(arr) {
//let tempArr;
//arr.splice(0, 1);
//tempArr = arr;
////console.log(tempArr);
//return tempArr;
//}
//console.log(jShift(testArr));

// REVERSE AN ARRAY
//const reverseArr = arr => {
//let tempArr = [];
//for (let i = 0; i < arr.length - 1; i++) {
//tempArr.unshift(arr[i]);
//}
//console.log(tempArr);
//return tempArr;
//};
//testArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//console.log(reverseArr(testArr));

// REVERSE AN ARRAY WITH NO BUILT INS
//const testArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//function reverseArr(arr) {
//let tempArr = [];
//for (let i = arr.length; i > 0; i--) {
//el = arr[i];
//if (el === undefined) {
//continue;
//} else {
//tempArr = [...tempArr, el];
//console.log("el: ", el);
//console.log(tempArr);
//}
//}
//return tempArr;
//}
//console.log(reverseArr(testArr));

// REPLACMENT FOR .MAP()
//const testArr = [1, 2, 3, 4, 5, 6];
//function jMap(arr) {
//copy = arr;
//console.log("copy: ", copy);
//console.log("arr: ", arr);
//return copy && arr;
//}
//console.log(jMap(testArr));
//console.log("testArr: ", testArr);
//console.log("copy: ", copy);

// REPLACMENT FOR .FILTER()
//const testArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//function jFilter(arr) {
//let filtered = [];
//copy = arr;
//for (let i = 0; i < copy.length; i++) {
//if (arr[i] > 4) {
//filtered = [...filtered, arr[i]];
//console.log(filtered);
//}
//}
//}
//console.log(jFilter(testArr));

// REPLACMENT FOR .REDUCE()

// REPLACMENT FOR .FOREACH()
