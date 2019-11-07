function cariModus(arr) {
  // you can only write your code here!
  var hasil = [];
  var max = [0,0];
  var isReady = false;
  var samaJumlah = true;
  
  for (var i = 0; i < arr.length; i++) {
    if (hasil.length === 0) {
      hasil.push([arr[i]]);
      hasil[i].push(1);
    } else {
      for (var j = 0; j < hasil.length; j++) {
        if(hasil[j][0] === arr[i]) {
          var temp = hasil[j][1];
          hasil[j].pop();
          hasil[j].push(temp+1);
          isReady = true;
        }
      }
      if (isReady === false) {
        hasil.push([]);
        var total = hasil.length;
        hasil[total-1].push(arr[i]);
        hasil[total-1].push(1);
      }
      isReady = false;
    }
  }

  for (var i=0;i<hasil.length;i++){
    if(max[1]<hasil[i][1]) max = hasil[i];
  }

  for (var i=0;i<hasil.length-1;i++){
    if (hasil[i][1] != hasil[i+1][1]) samaJumlah = false;
  }

  if (samaJumlah === true || hasil.length === 1) {
    return -1
  } else return max[0];
}



// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1