const repeatString = function(repeatString, times) {
    if(times < 0){
        return "ERROR"
    }
    return repeatString.repeat(times)
};

// Do not edit below this line
module.exports = repeatString;
