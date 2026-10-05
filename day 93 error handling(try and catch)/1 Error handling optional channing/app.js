// Optional chaining in Object in js

// It is used to safely access object properties without errors.

// Problem without optional chaining ❌
const user = null
console.log(user.name) // ❌ Error


// With optional chaining ✅
const user = null
console.log(user?.name) // ✅ undefined (no error)

const obj={
    name:"gaurav",
    age:20,
    address:{
        city:"Delhi",
        country:"India"
    }
}

console.log(obj.address.city)  // it print "Delhi"
// console.log(obj.addrs.city)  // it give type error because onj.addrs give underfined and you do doubt oprator on undefined
console.log(obj.addrs?.city) // it give undefined that is optional chaining