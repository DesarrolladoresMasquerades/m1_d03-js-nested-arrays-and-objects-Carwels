// Class code examples

const student1 = {name: "Bob", age: 17}
const student2 = {name: "Susy", age: 18}
const student3 = {name: "Ted", age: 18}

const students = [
    {name: "Bob", age: 17},
    {name: "Susy", age: 18},
    {name: "Ted", age: 18}
]

console.log(students[1])

console.log(students[1].age)
console.log([students.indexOf("Susy")]) // This will not work

const Bob = {name: "Bob", age: 17}
const Susy = {name: "Susy", age: 18}
const Ted = {name: "Ted", age: 18}

const studentsObject = {
    Bob: {name: "Bob", age: 17},
    Susy: {name: "Susy", age: 18},
    Ted: {name: "Ted", age: 18}
}

console.log(studentsObject.Susy.age)
studentsObject.hasOwnProperty("Susy")
studentsObject.hasOwnProperty("Marco")


const classroom = {
    marco: { name: "Marco", friends: [{name: "Paolo", age: 49}] },
    carlos: { name: "Carlos", friends: [ {name: "Gabriel", age: 45}] },
    carol: { name: "Carol", friends: [{name: "Bob", age: 17}, {name: "Susy", age: 18}, {name: "Ted", age: 18}] }
}

console.log(classroom.carlos.friends.length)

for (const friend of classroom.carol.friends) console.log(friend.name)

//You can do
/* for(const friend of classroom
    .carol
    .friends) console.log(friend.name) */
