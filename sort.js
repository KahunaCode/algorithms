
//selection sort. takes array, gens new sorted array

module.exports = (function() {


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
      var numLoops = arr.length;
      for (var i = 0; i < numLoops; i++){
        var smallest = findSmallest(arr);
        newArray.push(arr.splice(smallest,1)[0]);
      }
      return newArray;
    }

  return {findSmallest:findSmallest, selectionSort:selectionSort};

}());