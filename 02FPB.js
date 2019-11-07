function fpb(angka1, angka2) {
  // you can only write your code here!
  var arr1 = [];
  var arr2 = [];
  var hasil = 0;

  for (var i = 1; i<=angka1; i++) {
      if (angka1 % i === 0) arr1.push(angka1 / i);
  }

  for (var i = 1; i<=angka2; i++) {
    if (angka2 % i === 0) arr2.push(angka2 / i);
  }

  for (var i=arr1.length-1; i > 0; i--){
      for(var j=arr2.length-1; j > 0; j--) {
          if (arr2[j] === arr1[i]) {
              if (hasil < arr2[j]) hasil = arr2[j];
          }
      }
  }
  return hasil;
}

// TEST CASES
console.log(fpb(12, 16)); // 4
console.log(fpb(50, 40)); // 10
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(17, 23)); // 1