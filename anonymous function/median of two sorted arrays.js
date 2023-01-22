
let numArray1 = [10, 13, 45, 12, 8];
let numArray2 = [13, 15, 18, 22, 24];

function returnMedian(arr) {
  const mid = arr.length / 2;
	if(arr.length % 2 === 0) {
     return (arr[mid] + arr[mid + 1]) /  2;
  } else {
     return arr[Math.floor(mid)];
  }
}

function findTheMedian() {
  const sortedArr1 = numArray1.sort((a, b) => a - b);
  const sortedArr2 = numArray2.sort((a, b) => a - b);
  const medianOfTwoArr = (returnMedian(sortedArr1) + returnMedian(sortedArr2)) / 2;
    console.log(medianOfTwoArr);
}

findTheMedian()