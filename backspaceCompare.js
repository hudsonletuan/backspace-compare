function backspaceCompare(s, t) {
    ```we want to compare the right-end characters of these 2 strings
    if there is a mismatch that is not caused by '#', it returns false;
    if there is a match not by '#', remove the right-end characters for both strings to keep on checking;
    if there is a '#' at the right-end, backspace necessary characters before checking the right-end characters
    ```
    //split 2 strings into 2 arrays that contains all the characters as elements
    let sArr = s.split("");
    let tArr = t.split("");

    //loop to check and backspace characters if there are some # in the arrays
    while (sArr.includes("#") || tArr.includes("#")) {
        //if the right-end chars are the same and not #, remove these right-end chars
        if (sArr[sArr.length - 1] === tArr[tArr.length - 1] && sArr[sArr.length - 1] !== "#") {
            sArr.pop();
            tArr.pop();
        } else if (sArr[sArr.length - 1] === "#") {
            //if the right-end char of the first array is #
            let count = 1; //how many # need to be removed at the same time, for example ABC#D## means 3 #
            let index = 1; //keep track of the checking character's index
            let charToCheck = 1; //how many chars coming before the right-end # that need to be checked
            //keep checking until charToCheck is 0
            while (charToCheck > 0) {
                if (sArr[sArr.length - index - 1] === "#") {
                    count++;
                    charToCheck++;
                } else {
                    charToCheck--;
                }
                index++;
            }
            //if the number of chars needed to be removed (including #) is more than current number of chars in the array, this array is empty
            if (count * 2 > sArr.length) {
                sArr = [];
            } else {
                sArr.splice(sArr.length - (count*2), count*2); //remove the chars including #
            }
        } else if (tArr[tArr.length - 1] === "#") {
            //if the right-end char of the second array is #, same method as above
            let count = 1;
            let index = 1;
            let charToCheck = 1;
            while (charToCheck > 0) {
                if (tArr[tArr.length - index - 1] === "#") {
                    count++;
                    charToCheck++;
                } else {
                    charToCheck--;
                }
                index++;
            }
            if (count * 2 > tArr.length) {
                tArr = [];
            } else {
                tArr.splice(tArr.length - (count*2), count*2);
            }
        } else if (sArr[sArr.length - 1] !== tArr[tArr.length - 1]) { //if the right-end characters are different, return false
            return false;
        }
    }
    if (JSON.stringify(sArr) === JSON.stringify(tArr)) {
        //JSON.stringify is to compare these 2 arrays, if they are the same, return true, if not, false
        return true;
    } else {
        return false;
    }
    
};
