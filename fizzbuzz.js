let skippable = 0;
let temp;
function fizzBuzz(start, end, skip){
    temparray = [];
    for (let i = start; i < (end +1); i++){
        skippable = 0;
        temp = i;
        while (temp >= 10 && skippable == 0){
            if ((temp % 10) == skip){
                skippable = 1;
            }
            else{
                temp = temp / 10;
                temp = Math.floor(temp);
            }
        }
        if ((temp % 10 ) == skip){
            skippable =1;
        } 
        if (skippable == 0){
            temparray.push(i);
        }
    }
    return temparray;
}

// DON'T EDIT THE LINE BELOW THIS COMMENT
module.exports = fizzBuzz;