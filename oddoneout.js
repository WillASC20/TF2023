testarray = [2, 3, 6, 8]
function oddOneOut(arrOfInts){
    for (i = 0; i < arrOfInts.length; i++){
        if (arrOfInts[i] % 2 != 0){
            return arrOfInts[i];
        }
    }
    return -1;
}

answer = oddOneOut(testarray);
console.log(answer);
// DON'T EDIT THE LINE BELOW THIS COMMENT
module.exports = oddOneOut;