const arr = [1, 2, 3, 4, 5, 6]

for (const i of arr) {
    console.log(i);
}

const map = new Map();
map.set('IN', "India");
map.set('US', "United State of America");

console.log(map);

for (const [key, value] of map) {
    console.log(key, ":-", value);
}


const myObject = {
    name: "aniket",
    age: "19",
    location: "udaipur"
}

for (const key in myObject) {
    console.log(`Key is ${key} -> ${myObject[key]}`);
}
