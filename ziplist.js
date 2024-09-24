"use strict";
function zipList(abcList, numList) {
    const result = [];
    for (let i = 0; i < numList.length; i++) {
        result.push(abcList[i], numList[i]);
    }
    return result;
}
console.log(zipList(['a', 'b', 'c'], [1, 2, 3]));
function zipListTheFunctionalWay(abcList, numList) {
    return abcList.reduce((result, item, index) => {
        result.push(item, numList[index]);
        return result;
    }, []);
}
console.log(zipListTheFunctionalWay(['a', 'b', 'c'], [1, 2, 3]));
