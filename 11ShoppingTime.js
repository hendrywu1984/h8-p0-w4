function shoppingTime(memberId, money) {
  // you can only write your code here!
  var daftarBarang = [['Sweater Uniklooh', 175000],['Casing Handphone', 50000],['Sepatu Stacattu', 1500000],['Baju Zoro', 500000],['Baju H&N', 250000]];
  daftarBarang = sortBarang(daftarBarang);
  
  return ObjCust(memberId, money, daftarBarang);
}

function sortBarang (daftarBarang) {
  var hasil = [];
  var temp = [];
  var tukar = false;
  var panjang = daftarBarang.length
  
  //metode buble sort
  do {
      tukar = false;
      for (var i=0; i < panjang - 1; i++){
          if (daftarBarang[i][1] < daftarBarang[i+1][1]){
              var temp = daftarBarang[i];
              daftarBarang[i] = daftarBarang[i+1];
              daftarBarang[i+1] = temp;
              tukar = true;
          }
      }
      panjang--;
  } while (tukar);
  return daftarBarang
}

function ObjCust(memberId , money, daftarBarang) {
  var beli = [];
  
  if (memberId === undefined || memberId === '') return 'Mohon maaf, toko X hanya berlaku untuk member saja';
  else if (money<daftarBarang[daftarBarang.length-1][1] ) return 'Mohon maaf, uang tidak cukup';
  else {
    var data = {};
    data.memberId = memberId;
    data.money = money;

    for (var i=0; i < daftarBarang.length; i++) {
      if (money-daftarBarang[i][1] >= 0) {
        money -= daftarBarang[i][1];
        beli.push(daftarBarang[i][0]);
      }
    }
    data.listPurchased = beli;    
    data.changeMoney = money;

    return data;
  }
}



// TEST CASES
console.log(shoppingTime('1820RzKrnWn08', 2475000));
  //{ memberId: '1820RzKrnWn08',
  // money: 2475000,
  // listPurchased:
  //  [ 'Sepatu Stacattu',
  //    'Baju Zoro',
  //    'Baju H&N',
  //    'Sweater Uniklooh',
  //    'Casing Handphone' ],
  // changeMoney: 0 }
console.log(shoppingTime('82Ku8Ma742', 170000));
//{ memberId: '82Ku8Ma742',
// money: 170000,
// listPurchased:
//  [ 'Casing Handphone' ],
// changeMoney: 120000 }
console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja