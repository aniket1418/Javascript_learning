const tinderUser = new Object();

console.log(tinderUser);

obj1 = {
    1: "a",
    2: "b"
}

obj2 = {
    3: "c",
    4: "d"
}

obj3 = Object.assign({}, obj1, obj2);
obj4 = {...obj1, ...obj2}
console.log(obj4);

console.log(Object.keys(obj1));

const myArry1 = ["1", "2", "3", "4"];
const myArry2 = ["6", "7", "8"];


const myArry3 = [...myArry1, ...myArry2];
console.log(myArry3);


const course = {
    courseName: "JS full course",
    price: "10000",
    courseInstructor: "Aniket"
}

// Destructure.
const {courseInstructor: instructor} = course
console.log(instructor);
