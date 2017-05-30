

module.exports = {

bs:function binarySearch(list, item){
    var low = 0;
    var high = list.length -1;

    while (low <= high){
      var mid = (low + high);
      var guess = list[mid];
      if (guess == item){
        return "the index of " + item + " is " + mid;
      }
      if (guess > item){
        high = mid -1;
      }
      else {
        low = mid +1;
      }
    }return null;
  }

}