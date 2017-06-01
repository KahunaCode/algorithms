
//selection sort. takes array, gens new sorted array

module.exports = {


  fs:  function findSmallest(arr){
      var smallest = arr[0];
      var smallestIndex = 0;

      for (var i = 0; i<arr.length; i++){
        if (arr[i] < smallest){
          smallest = arr[i];
          smallestIndex = i;
        }
      }
      return smallestIndex;
    },


  selSort:  function selectionSort(arr){
      var newArray = [];
      for (var i = 0; i < arr.length; i++){
        var smallest = fs(arr);
        newArray.push(arr.pop(smallest));
      }
    }

};