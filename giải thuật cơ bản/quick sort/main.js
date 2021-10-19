//quick sort

function partition(numberList, left, right) {
  const mid = left + Math.trunc((right - left) / 2);
  const pivot = numberList[mid];

  let i = left;
  let j = right;

  while (i <= j) {
    // find the first Item that geater than pivot

    while (numberList[i] < pivot) i++;

    //find the first item that smaller than pivot

    while (numberList[j] > pivot) j--;

    if (i < j) {
      let temp = numberList[i];
      numberList[i] = numberList[j];
      numberList[j] = temp;
    }

    //must have, INF loop
    i++;
    j--;
  }

  return i;
}

function quickSort(numberList, left, right) {
  if (left >= right) return numberList;

  const pivotPostion = partition(numberList, left, right);

  quickSort(numberList, left, pivotPostion - 1);
  quickSort(numberList, pivotPostion, right);

  return numberList;
}

console.log(quickSort([1, 5, 63, 2, 4, 65], 0, 2));
