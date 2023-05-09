let frequencyCounter1 = {};

let arr = [3, 4, 3]

for (let val of arr) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    console.log(frequencyCounter1[val])
}

console.log(frequencyCounter1);