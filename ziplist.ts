function zipList(abcList: string[], numList: number[]): (string | number)[] {
  const result: (string | number)[] = [];
  for (let i = 0; i < numList.length; i++) {
    result.push(abcList[i], numList[i]);
  }

  return result;
}

console.log(zipList(['a', 'b', 'c'], [1, 2, 3]));

function zipListTheFunctionalWay(abcList: string[], numList: number[]): (string | number)[] {
  return abcList.reduce((result, item, index) => {
    result.push(item, numList[index]);
    return result;
  }, [] as (string | number)[]);
}

console.log(zipListTheFunctionalWay(['a', 'b', 'c'], [1, 2, 3]));
