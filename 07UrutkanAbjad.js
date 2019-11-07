function urutkanAbjad(str) {
  // you can only write your code here!
  //cara cepat
  //return str.split('').sort().join('');;

  //cara manual
  var hasil = '';
  var temp = '';
  var tukar = false;
  var panjang = str.length

  do {
    tukar = false;
    for (var i=0; i < panjang - 1; i++){
        if (str.charCodeAt(i) > str.charCodeAt(i+1)){
            var temp = str[i];
            str[i] = str[i+1];
console.log(i);
hasil[i] = str[i+1];
            str[i+1] = temp;
hasil[i+1] = temp;
            tukar = true;
console.log(hasil);
        }
        
    }
    panjang--;
  } while (tukar);

  return hasil;
}


// TEST CASES
console.log(urutkanAbjad('hello')); // 'ehllo'
// console.log(urutkanAbjad('truncate')); // 'acenrttu'
// console.log(urutkanAbjad('developer')); // 'deeeloprv'
// console.log(urutkanAbjad('software')); // 'aeforstw'
// console.log(urutkanAbjad('aegis')); // 'aegis'