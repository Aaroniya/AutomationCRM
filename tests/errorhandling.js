/*let student ={
    firstName: "Rose",
    lastName: "Lily",
    get fullName()
    {
        return `$ {student.firstName} $ {student.lastName}`;
},
set fullName (value)
{
    if(typeof value! = "string")
    {
        const err = new Error (" it is not string");
        
        throw err
    }
    let values = values.split(" ");
    this.firstName =values[0];
    this.firstName =values[1]?" ";
}
};
try {
    student.fullName=45;
}
catch(ex)
{
    console.log(ex);

}
    
let student = {
    firstName: "Rose",
    lastName: "Lily",
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    },
    set fullName(value) {
        if (typeof value !== "string") {
            const err = new Error("It is not a string");
            throw err;
        }
        let values = value.split(" ");
        this.firstName = values[0];
        this.lastName = values[1] ? values[1] : ""; // Handle cases where last name is missing
    }
};

try {
    student.fullName = 45; // Will throw an error
} catch (ex) {
    console.log(ex); // Logs the error: "It is not a string"
}

console.log(student.fullName); // Output will be: "Rose Lily"

