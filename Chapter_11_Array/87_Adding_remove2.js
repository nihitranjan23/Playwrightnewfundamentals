let arr = [15, 25, 35];
arr.push(40, 50, 60);
console.log(arr);
// arr = [1, 2, 3, 4, 5, 6]
// index=0,1,2,3,4,5

// splice(start, deleteCount, ...itemsToAdd)
arr.splice(2, 1);
console.log(arr);

arr.splice(2, 0, 99);
console.log(arr);// add 99 at index place of 2 and shift next
arr.splice(2, 1, 95); // replace the index of 2 with 95
console.log(arr);


// arr = [1, 2, 3, 4, 5, 6]
// index=0,1,2,3,4,5

arr.splice(1, 2, 10, 20);
console.log(arr);