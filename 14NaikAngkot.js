function naikAngkot(arrPenumpang) {
    var hasil = [];
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    //your code here
    for (var i = 0; i < arrPenumpang.length; i++){
        var Angkot = inputPenumpang(arrPenumpang[i], rute);
        hasil.push(Angkot);
    }
    return hasil;
}

function inputPenumpang (arrPenumpang, rute) {
    var tarif = 2000;
    var jarak = -1;
    var hitung = false;

    var Angkot = {}
    Angkot.penumpang = arrPenumpang[0];
    Angkot.naikDari = arrPenumpang[1];
    Angkot.tujuan = arrPenumpang[2];

    for(var i=rute.length - 1; i >=0; i--) {
        if (hitung === true && rute[i] === arrPenumpang[1]){
            jarak +=1;
            hitung = false;
        } else if (hitung === true) {
            jarak +=1 ;
        } else if (arrPenumpang[2] === rute[i]) {
            jarak += 1;
            hitung = true;
        } 
    }
    Angkot.bayar = jarak * tarif;
    return Angkot;
}

//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]