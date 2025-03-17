function swapValues() {
    let a = 30;
    let b = 10;
    a = a+b;
    b = a-b;
    a = a-b;
    console.log(a);
    console.log(b);
}
swapValues();