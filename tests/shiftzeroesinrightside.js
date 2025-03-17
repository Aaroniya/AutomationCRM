const arr = [2, 0, 1, 3, 0, 0, 5];
function moveZero(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            newArr.push(arr[i]);
        }
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            newArr.push(0);
        }
    }
  return newArr;
}
console.log(moveZero(arr));