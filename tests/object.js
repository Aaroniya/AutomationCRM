/*let person={
name= "jenet",
let age=5;
intrest=["Reading,Writing new Novels"];
is alive:true;
address:{
    city:"Dindigul",
    state:"Tamilnadu",
}
greeting:function()
{
    let msg="my name is ${this.name}i love${this.intrest}":
}
}
console.log(person=name)
{
    console.log(person.address.city);
}
    */
let person = {
    name: "Jenet",  // Corrected assignment
    age: 5,  // Fixed syntax
    interest: ["Reading", "Writing new Novels"],  // Fixed spelling and array formatting
    isAlive: true,  // Corrected property name and assignment
    address: {
        city: "Dindigul",
        state: "Tamilnadu",
    },
    greeting: function() {
        // Corrected template string
        let msg = `My name is ${this.name}, I love ${this.interest.join(", ")}.`;
        return msg;
    }
};

// Corrected usage of console.log
console.log(person);

// Call the greeting function
console.log(person.greeting());

// Access and log the city from the address
console.log(person.address.city);