const myCoding = [
    {
        language: "Ruby",
        syntax: ".rb"
    },
    {
        language: "Python",
        syntax: ".py"
    },
    {
        language: "Javascript",
        syntax: ".js"
    }
];

myCoding.forEach((key) => {
    console.log(`Language Name is ${key.language} and the respective syntax is ${key.syntax}`);
});
