function urutkanAbjad(str) {
  // you can only write your code here!
  //cara cepat
  //return str.split('').sort().join('');;

  //cara manual
  var temp = '';
  var kalimat = [];
  var hasil = '';

  for(var i=0; i< str.length; i++) {
    kalimat.push(str[i]);
  }

  for (var i = 0; i < kalimat.length; i++) {
    for (var j=0 ; j < kalimat.length; j++) {
      if (kalimat[j] > kalimat[j+1]) {
        temp = kalimat[j];
        kalimat[j] = kalimat[j+1];
        kalimat[j+1] = temp;
      }
    }
  } 
  console.log(kalimat);
  for (var i = 0; i < kalimat.length; i++) {
    hasil += kalimat[i];
  }
  return hasil;
}


// TEST CASES
console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'