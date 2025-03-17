function charcount(text,char)
{
    let count =0;
    for (let c of text)
    {
        if (c == char)
            count ++;
    }
    return count;
}
const text ="welcome automind infotech";
const char = prompt ("enter the character to count:");
console.log(`the character '$ {char}'appear ${charcount (text,char)}time,char`);