function angkaPrima(angka) {
  // you can only write your code here!
  var isTrue = true;

  for (var i = 2; i<=9; i++) {
      if (i!=angka) if (angka % i === 0) isTrue = false;
  }

  return isTrue
}

// TEST CASES
console.log(angkaPrima(3)); // true
console.log(angkaPrima(7)); // true
console.log(angkaPrima(6)); // false
console.log(angkaPrima(23)); // true
console.log(angkaPrima(33)); // false