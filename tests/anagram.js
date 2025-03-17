function areAnagram (str1,str2) {
    if (str1.length !== str2.length){
    console.log ("Not Anagram");
    return;
}
    let countMap ={};
    for (let char of str1.toLowerCase ()){ countMap [char]=(countMap [char] ||0) +1;
    }
    for (let char of str2.toLowerCase ()){
    if (! countMap [char]){
    console.log ("Not Anagram");
    return;
}
countMap[char]--;
    }
    console.log("Anagram");
}
areAnagram ("Silent","listen");
