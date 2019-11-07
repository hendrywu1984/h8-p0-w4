function countProfit(shoppers) {
  let listBarang = [ ['Sepatu Stacattu', 1500000, 10],
                     ['Baju Zoro', 500000, 2],
                     ['Sweater Uniklooh', 175000, 1]
                   ];

  //you can only write your code here!
  //isi data Object
  var barang = [];
  for (var i = 0; i < listBarang.length; i++){
    barang.push(ObjBuy(listBarang[i][0], [], listBarang[i][2], listBarang[i][1], 0));
  }

  for (var i=0; i < shoppers.length; i++) {
    for (var j=0; j< barang.length; j++) {
      if (barang[j]["product"] === shoppers[i]["product"] && barang[j]["leftOver"] >= shoppers[i]["amount"]) {
        barang[j]["leftOver"] -= shoppers[i]["amount"];
        barang[j]["shoppers"].push(shoppers[i]["name"]);
        barang[j]["totalProfit"] += shoppers[i]["amount"] * barang[j]["price"];
      }
    }
  }

  for (var i = 0; i < barang.length; i++) {
    delete barang[i].price;
  }
  

  if (shoppers.length ===0 ) return [];
  else return barang;
}

function ObjBuy(product, shoppers, leftOver, price, totalProfit) {
  var data = {};
  data.product = product;
  data.shoppers = shoppers;
  data.leftOver = leftOver;
  data.price = price;
  data.totalProfit = totalProfit;
  return data;
 }

// TEST CASES
console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 2}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 3}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 2}]));
//[ { product: 'Sepatu Stacattu',
//   shoppers: [ 'Windi', 'Vanessa' ],
//   leftOver: 5,
//   totalProfit: 7500000 },
// { product: 'Baju Zoro',
//   shoppers: [],
//   leftOver: 2,
//   totalProfit: 0 },
// { product: 'Sweater Uniklooh',
//   shoppers: [],
//   leftOver: 1,
//   totalProfit: 0 } ]

console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 8}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 10}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 1}, {name: 'Devi', product: 'Baju Zoro', amount: 1}, {name: 'Lisa', product: 'Baju Zoro', amount: 1}]));
// [ { product: 'Sepatu Stacattu',
//     shoppers: [ 'Windi' ],
//     leftOver: 2,
//     totalProfit: 12000000 },
//   { product: 'Baju Zoro',
//     shoppers: [ 'Devi', 'Lisa' ],
//     leftOver: 0,
//     totalProfit: 1000000 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [ 'Rani' ],
//     leftOver: 0,
//     totalProfit: 175000 } ]
console.log(countProfit([{name: 'Windi', product: 'Sepatu Naiki', amount: 5}]));
// [ { product: 'Sepatu Stacattu',
//     shoppers: [],
//     leftOver: 10,
//     totalProfit: 0 },
//   { product: 'Baju Zoro',
//     shoppers: [],
//     leftOver: 2,
//     totalProfit: 0 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [],
//     leftOver: 1,
//     totalProfit: 0 } ]
console.log(countProfit([])); //[]