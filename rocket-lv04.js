/**
 * =========
 * Isi Kotak
 * =========
 * 
 * [Description]
 * Function isiKotak merupakan sebuah function yang membuat sebuah array multidimensi
 * yang berisikan angka dengan ketentuan:
 * 1. Angka mulai dari 1 dan `bertambah` hingga angka @input yang diberikan.
 * 2. Ketika angka tersebut sudah mencapai angka @input maka akan `berkurang sampai angka 0`.
 * 3. Proses 1 & 2 berulang hingga seluruh array dengan ukuran @input x @input diisi dengan angka.
 * 4. Jika angka yang diisi mencapai 2 digit, `gunakan bilangan satuannya`.
 *    contoh: 15 => 5, 47 => 7, 124 => 4
 * 
 * [Rules]
 * 1. Dilarang membuat function lain selain yang berada di skeleton code.
 * 2. Dilarang menggunakan built-in function:
 *    map, filter, reduce, forEach, split, slice, splice, join, reverse, sort
 */

function isiKotak(num) {
    console.log('')
    var tambah = true;
    var curr = 1;
    var hasil = [[]];
    var arrayNo = 0;

    // Write your code here
    for (var i=0; i < num; i++){
        for (var j=0; j < num; j++) {
            console.log(1,  i, j);
            if (tambah && curr <= num) {
                console.log(2, curr);
                
                if (curr> 10) curr %=10;
                hasil[arrayNo].push(curr)
                curr++;
                console.log(2, hasil);
            } else if (curr-1 === num) {
                console.log(3, curr);
                tambah =false;
                hasil.push([])
                curr--;
                arrayNo++;
                console.log(3, hasil);
            } else if(tambah === false && curr >1) {
                curr--;
                console.log(4, curr);
                hasil[arrayNo].push(curr);
                //curr--;
                console.log(4, hasil);
                
            }  else if (curr === 1) {
                tambah = true;
                hasil.push([]);
                curr++;
                arrayNo++;
            }
        }
    }
    return(hasil);
  }
  
  console.log(isiKotak(1))
  // [ [ 1 ] ]
  console.log(isiKotak(2))
  // [ [ 1, 2 ],
  //   [ 1, 2 ] ]
  console.log(isiKotak(3))
  // [ [ 1, 2, 3 ],
  //   [ 2, 1, 2 ],
  //   [ 3, 2, 1 ] ]
//   console.log(isiKotak(4))
//   // [ [ 1, 2, 3, 4 ],
//   //   [ 3, 2, 1, 2 ],
//   //   [ 3, 4, 3, 2 ],
//   //   [ 1, 2, 3, 4 ] ]
//   console.log(isiKotak(5))
//   // [ [ 1, 2, 3, 4, 5 ],
//   //   [ 4, 3, 2, 1, 2 ],
//   //   [ 3, 4, 5, 4, 3 ],
//   //   [ 2, 1, 2, 3, 4 ],
//   //   [ 5, 4, 3, 2, 1 ] ]
//   console.log(isiKotak('5'))
//   // Invalid
//   console.log(isiKotak(false))
//   // Invalid
//   console.log(isiKotak(10))
//   // [ [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 0 ],
//   //   [ 9, 8, 7, 6, 5, 4, 3, 2, 1, 2 ],
//   //   [ 3, 4, 5, 6, 7, 8, 9, 0, 9, 8 ],
//   //   [ 7, 6, 5, 4, 3, 2, 1, 2, 3, 4 ],
//   //   [ 5, 6, 7, 8, 9, 0, 9, 8, 7, 6 ],
//   //   [ 5, 4, 3, 2, 1, 2, 3, 4, 5, 6 ],
//   //   [ 7, 8, 9, 0, 9, 8, 7, 6, 5, 4 ],
//   //   [ 3, 2, 1, 2, 3, 4, 5, 6, 7, 8 ],
//   //   [ 9, 0, 9, 8, 7, 6, 5, 4, 3, 2 ],
//   //   [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 0 ] ]
//   console.log(isiKotak(11))
//   // [ [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1 ],
//   //   [ 0, 9, 8, 7, 6, 5, 4, 3, 2, 1, 2 ],
//   //   [ 3, 4, 5, 6, 7, 8, 9, 0, 1, 0, 9 ],
//   //   [ 8, 7, 6, 5, 4, 3, 2, 1, 2, 3, 4 ],
//   //   [ 5, 6, 7, 8, 9, 0, 1, 0, 9, 8, 7 ],
//   //   [ 6, 5, 4, 3, 2, 1, 2, 3, 4, 5, 6 ],
//   //   [ 7, 8, 9, 0, 1, 0, 9, 8, 7, 6, 5 ],
//   //   [ 4, 3, 2, 1, 2, 3, 4, 5, 6, 7, 8 ],
//   //   [ 9, 0, 1, 0, 9, 8, 7, 6, 5, 4, 3 ],
//   //   [ 2, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0 ],
//   //   [ 1, 0, 9, 8, 7, 6, 5, 4, 3, 2, 1 ] ]
//   console.log(isiKotak(15))
//   // [ [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5 ],
//   //   [ 4, 3, 2, 1, 0, 9, 8, 7, 6, 5, 4, 3, 2, 1, 2 ],
//   //   [ 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 4, 3 ],
//   //   [ 2, 1, 0, 9, 8, 7, 6, 5, 4, 3, 2, 1, 2, 3, 4 ],
//   //   [ 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 4, 3, 2, 1 ],
//   //   [ 0, 9, 8, 7, 6, 5, 4, 3, 2, 1, 2, 3, 4, 5, 6 ],
//   //   [ 7, 8, 9, 0, 1, 2, 3, 4, 5, 4, 3, 2, 1, 0, 9 ],
//   //   [ 8, 7, 6, 5, 4, 3, 2, 1, 2, 3, 4, 5, 6, 7, 8 ],
//   //   [ 9, 0, 1, 2, 3, 4, 5, 4, 3, 2, 1, 0, 9, 8, 7 ],
//   //   [ 6, 5, 4, 3, 2, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0 ],
//   //   [ 1, 2, 3, 4, 5, 4, 3, 2, 1, 0, 9, 8, 7, 6, 5 ],
//   //   [ 4, 3, 2, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2 ],
//   //   [ 3, 4, 5, 4, 3, 2, 1, 0, 9, 8, 7, 6, 5, 4, 3 ],
//   //   [ 2, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4 ],
//   //   [ 5, 4, 3, 2, 1, 0, 9, 8, 7, 6, 5, 4, 3, 2, 1 ] ]