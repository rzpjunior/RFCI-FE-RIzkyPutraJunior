function bubblesort(array) {
  len = array.length;

  for (let i = 0; i < len; i++) {
      for (let j = 0; j < len - i; j++) {
          let a = array[j];
          if (a != array[-1]) {
              var b = array[j + 1];
              if (a > b) {
                  array[j] = b;
                  array[j + 1] = a;
              }
          }
      }
  }
}

let array = [4, 9, 7, 5, 8, 9, 3];
bubblesort(array);
console.log(array)