function bubblesort(array,first = true) {
  // initaial variable
  len = array.length;
  var i = 0;
  var j = 1;
  var totalSwap = 0;

  for (var i = 0; i < len; i++) {
    // a condition to swap array
    if (array[i] > array[j]) {
      var arrayI = array[i];
      var arrayJ = array[j];
      array[i] = array[j];
      array[j] = arrayI;

      totalSwap = totalSwap + 1;
      console.log('['+ arrayI +','+ arrayJ +'] => ',array);
      // call this method again to start from array 0
      var sort = bubblesort(array,false);

      // a condition to let know that the array is sorted
      if (sort.isEnd == 1) {
        // if we back again to first method we return total swap
        if (first == true) { return 'Jumlah Swap = ' + sort.totalSwap }
        return  { isEnd: 1,totalSwap: sort.totalSwap + 1 };
      }
    }

    // for last method give return to over looping
    if (i == (len - 1)) {
      return { isEnd: 1,totalSwap: totalSwap + 1 };
    }
    j++;
  }
}