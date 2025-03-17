function isPanagram(sentence)
{
    sentence = sentence.toLowerCase().replace(/[^a-z]/g," ");
    let alphabetset = new Set (sentence);
    console.log(alphabetset.size === 26?"This is a Panagram" : "This is not a Panagram");
}
let sentence ="The five boxing wizard jump quickly";
isPanagram(sentence);