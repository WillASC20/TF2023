let test = [];
let temparray = [];
let tempStr = "";
function strClean(arrOfStrs){
    array1 = arrOfStrs;
    test.length = arrOfStrs.length
    for (let i = 0; i < arrOfStrs.length; i++){
        test[i] = "";
        array1[i] = array1[i].trim();
        for (let j = 0; j < array1[i].length; j++){
            if (array1[i][j] == "1"){
                //test[i].push("one"); 
                test[i] += "one";
            }
            else if (array1[i][j] == "0"){
                //test[i].push("zero");
                test[i] += "zero";
            }
            else if (array1[i][j] == " "){
                //test[i].push("_");
                test[i] += "_";
            }
            else if (!("0" <= array1[i][j] && array1[i][j] <= "9")){
                //test[i].push(array1[i][j]);
                test[i] += array1[i][j];
            } 
        }
        
    }
    return test;
}
strClean(["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]);
//strClean(['  Blah!  ','10023','100']);
console.log(test);
// DO NOT EDIT THE LINE BELOW THIS  
module.exports = strClean;