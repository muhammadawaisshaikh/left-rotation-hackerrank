var arr = [1, 2, 3, 4, 5];

function LeftRotate(arr) {
    var rotated = [];

    for (let i = arr.length; i >= 0; i--) {
        rotated.push(arr[i]);
        console.log('rotated '+ rotated);
    }
    return rotated;
}

console.log(LeftRotate(arr));