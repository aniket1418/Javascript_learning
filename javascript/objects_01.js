//object literals

const sym1 = Symbol("Key1233");

const JsUser = {
    name: "Aniket",
    age: 22,
    location: "Udaipur",
    email: "aniket@googl.com",
    isLoggedIn: true,
    lasLoginDays: ["Monday", "Saturday"],
    "full name": "Aniket Mehta",
    [sym1]: "Key124422"
}

console.log(JsUser);
console.log(JsUser["name"]);
console.log(JsUser.name);
console.log(["full name"]);
console.log(JsUser[sym1]);

JsUser.email = "aniket.mehta@microsoft.com"
console.log(JsUser.email);
Object.freeze(JsUser);
JsUser.email = "aniket.mehta@synpos.com"
console.log(JsUser.email)
