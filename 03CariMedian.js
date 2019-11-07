function cariMedian(arr) {
    // you can only write your code here!
    /*
    Cara Singkat
    if (arr.length % 2 === 1) return arr[Math.floor(arr.length/2)];
    else return (arr[arr.length/2-1] + arr[arr.length/2])/2;
    */

    //Cara Manual
    var i=0;
    var j=arr.length-1;
    
    while (j-i > 1) {
        j--;
        i++;
    }

    if (i != j) return (arr[i]+arr[j]) / 2;
    else return arr[i];
  }
  
  // TEST CASES
  console.log(cariMedian([1, 2, 3, 4, 5])); // 3
  console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
  console.log(cariMedian([3, 4, 7, 6, 10])); // 7
  console.log(cariMedian([1, 3, 3])); // 3
  console.log(cariMedian([7, 7, 8, 8])); // 7.5