/*function pattern (input)
{
    let out =" ";
    for (let i=9;i>=0;i--)
    {
        let temp=i*2-1;
        for (let j=0;j<1;j++)
        {
            out=out +" ";
        }
        for (let k=temp;k<=((input -1)*2)-1;k ++);
        {
        out =out +"*";
        }
        out =out +"\n";
    }
    console.log (out);
}
pattern (10);
*/
function demouser(name)
{
    let msg="hello"+name+"i am learning javascript!";
    console.log(msg);
}
demouser("jeffi");