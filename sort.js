
//selection sort. takes array, gens new sorted array

function findSmallest(arr){
  var smallest = arr[0];
  var smallestIndex = 0;

  for (var i = 0; i<arr.length; i++){
    if (arr[i] < smallest){
      smallest = arr[i];
      smallestIndex = i;
    }
  }
  return smallestIndex;
}

function selectionSort(arr){
  var newArray = [];
  for (var i = 0; i < arr.length; i++){
    var smallest = findSmallest(arr);
    newArray.push(arr.pop(smallest));
  }
}