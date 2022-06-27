// for(let i = 1; i < 11; i++){
//     console.log(2 ** i)
// }
// for(let i = 1; i < 11; i++){
//     console.log (Math.pow(2,i))
// }

// const pow = function(counter){
//     for(let i = 1; i < counter; i++){
//         console.log(2 ** i)
//     }

// }
// pow(10)

// let result = ''
// let smile =';)'

// for (let i =1; i<6; i++){
//     console.log(result =+ smile)
// }

// for (let i =1; i<6; i++){
//     console.log(smile.repeat(i))

// }
// function smilik(str, numberOfRows){
//     for (let i =1; i<numberOfRows; i++){
//         console.log(result += str)

// }
// }
// function smilik(str, numberOfRows){
//     for (let i =1; i<numberOfRows; i++){
//         console.log(result += str)
//     }
// }
// smilik(':()', 10)

// function getWordStructure(word){
//     const vowels = 'aeiouy'.split('')
//     const consonants ='bcdfghjklmnpqrstvwxz'.split('')
//     console.log(vowels)

//     let vowelsCount = 0;
//     let consonanteCount = 0;

//     for(const char of word.toLowerCase()) {
//         if (vowels.includes(char)) vowelsCount++
//         else if(consonants.includes(char)) consonanteCount++
//     }
//     console.log(`В слове ${word} : ${vowelsCount}  гласных и ${consonanteCount} согласный букв`)
// }
// getWordStructure("Check-list")

// function getWordStructure(word){
//     console.log(`в слове ${word} содержится ${(word.match(/[aeiouy]/gi)).len}`)
// }

// function isPalindrom(word){
//     word = word
//     for(let i=0, j=wodr.length-1; i,word.length, j>=0; i++, j--){
//         if(word[i] !== word[j]){

//             return falsr
//         }
//     }
//     return true
// }
// console.log(isPalindrom("adds"))

// function isPalindrom2(wodr) {
//     return wodr.toLowerCase() === word.toLowerCase().split('').reverse().join('')
// }

// console.log(isPalindrom2("aBBA"))

function isPalindrom3(wodr) {
    word = word.toLowerCase();
    for(let i = 0; i<+word.length/2; i++) {
        if(word[i] !== word[word.length-1-i])
        return false
    }
    return true
}
console.log(isPalindrom3('Abba'))
