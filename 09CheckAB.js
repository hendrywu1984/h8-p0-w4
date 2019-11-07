function checkAB(num) {
  // you can only write your code here!
  var hasil = false;
  var selisih = -1;

  for(var i=0; i<num.length; i++) {
    if (num[i]=== 'a') {
        for (var j=i; j <num.length;j++) {
            if (num[j] != ' ') selisih++;
            if (num[j]==='b') {
              if (selisih === 3) hasil = true
              else selisih = 0;
            }
        }
    } if (num[i] === 'b') {
      for (var j=i; j <num.length;j++) {
        if (num[j] != ' ') selisih++;
        if (num[j]==='a') {
          if (selisih === 3) hasil = true
          else selisih = 0;
        }
      }
    }
  }
  
  return hasil;
}

// TEST CASES
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false