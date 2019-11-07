function tukarBesarKecil(kalimat) {
  // you can only write your code here!
  var hasil = '';
  for (var i = 0; i<kalimat.length;i++) {
      if (kalimat.charCodeAt(i) >= 65 && kalimat.charCodeAt(i) <= 90) hasil += String.fromCharCode(kalimat.charCodeAt(i)+32);
      else if (kalimat.charCodeAt(i) >= 97 && kalimat.charCodeAt(i) <= 122) hasil += String.fromCharCode(kalimat.charCodeAt(i)-32);
      else {
        hasil += kalimat[i];
      }
  }
  return hasil;
}

// TEST CASES
console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"