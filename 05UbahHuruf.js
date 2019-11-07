function ubahHuruf(kata) {
    // you can only write your code here!
    var hasil = '';
    for (var i=0; i < kata.length; i++) {
        hasil += String.fromCharCode(kata.charCodeAt(i)+1);
    }
    return hasil;
  }
  
  // TEST CASES
  console.log(ubahHuruf('wow')); // xpx
  console.log(ubahHuruf('developer')); // efwfmpqfs
  console.log(ubahHuruf('javascript')); // kbwbtdsjqu
  console.log(ubahHuruf('keren')); // lfsfo
  console.log(ubahHuruf('semangat')); // tfnbohbu