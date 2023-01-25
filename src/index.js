import "./styles.css";

let obj1 = {
  name: "Amit",
  age: 40,
  city: "patna",
  fullDetails: function () {
    return this.name + " " + this.age + " " + this.city;
  }
};

let obj2 = {
  name: "Sumit",
  age: 50,
  city: "delhi"
};

function getDetails(state, country) {
  return `${this.name} is from ${state} state, ${country}`;
}

let op1 = obj1.fullDetails();
// function burrowing
// we can call the method defined in obj1 for obj2 by passing obj2 as reference for this
let op2 = obj1.fullDetails.call(obj2);

// call and apply
// call and apply are almost same, only difference is the way we pass the arguments, in apply as array
console.log(getDetails.call(obj1, "Bihar", "India"));
console.log(getDetails.apply(obj2, ["Delhi", "India"]));

// bind method looks like call method, but only difference is instead of call the method it binds the method with the object and returns copy of that method
let getDetailsCopy = getDetails.bind(obj1, "Odisha", "UK");
console.log(getDetailsCopy);
console.log(getDetailsCopy());

document.getElementById("app").innerHTML = op1 + "<br/>" + op2;
