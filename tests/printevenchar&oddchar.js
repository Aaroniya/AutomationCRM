const input="AUTOMIND INFOTECH";
let evenchars=" ";
let oddchars=" ";
for(let i=0;i<input.length;i++)
{
    if(i%2===0)
    {
        oddchars+=input[i];
    }
    else
    {
       evenchars+=input[i]; 
    }
}
console.log(oddchars);
console.log(evenchars);