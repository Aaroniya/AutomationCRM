let n = 5;
for (let row = 1; row <= n; row++) {
    let array = [];
    for (let col = 1; col <= n; col++) {
        array.push("*");
    }
    console.log(array.join(" "));  
}
/*
let n = 5;
for (let row = 1; row <= n; row++) {
    let array = [];
    for (let col = 1; col <= row; col++) { 
        array.push("*");
    }
    console.log(array.join(" "));
}

let n = 5;
for (let row = 1; row <= n; row++) {
    let array = [];
    
    for (let space = 1; space <= n - row; space++) {
        array.push(" ");
    }
    
    for (let col = 1; col <= (2 * row - 1); col++) {
        array.push("*");
    }
    console.log(array.join("")); 
}
/*
function pattern(input) 
{
    let out= "";
    for (let i=9;i>=0;i--)
    {
        let temp=i*2-1;
        for (let j=0;j<1;j++)
        {
            out=out+" ";
        }
        for (let k=temp;k<=((input -1)*2) -1;k++);
    }
    out=out+"*";
}
out =out+"\n";
console.log(out);
pattern(10);  
function pattern(input) {
    let out = ""; 
    for (let i = 0; i < input; i++) {
        let temp = i * 2 + 1; 
        for (let j = 0; j < input - i - 1; j++) {
            out += " ";
        }
        for (let k = 0; k < temp; k++) {
            out += "*";
        }
        out += "\n";
    }

    return out;
}

console.log(pattern(5));


function pattern(input) {
    let out = "";
    for (let i = 0; i < 5; i++) {  
        let spaces = ' '.repeat(5 - i); // Create leading spaces for alignment
        let stars = '*'.repeat(i * 2 + 1); 
        out += spaces + stars + "\n"; 
    }
    console.log(out);
}

pattern(5);

let out=" ";
for (let i=1;i<10;i++)
{
    for (let j=0;j<1;j++)
    {
        if(i%2==0)
        {
            out=out+'0';
        }
        else
{
    out=out+'1';
}
    }
out=out+"\n";
}
console.log(out);