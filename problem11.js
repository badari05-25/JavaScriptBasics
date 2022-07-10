function sortByOcc(arr) {
    let map = new Map();
    for(let n of arr){
        map.set(n, (map.get(n) || 0) + 1)
      };
    let newArray = [...map];
    newArray.sort((a, b) => (b[0] - a[0]));
    newArray.sort((a, b) => (b[1] - a[1]));
    let total = newArray.map(x => x[0]);
    return total;
}
let arr = [3, 3, 4, 4, 7, 8]
console.log(sortByOcc(arr));