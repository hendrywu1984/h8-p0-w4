function digitPerkalianMinimum(angka) {
    // you can only write your code here!
    var arr = [];
    var digit = 100;

    for (var i = 1; i<=angka; i++) {
        if (angka % i === 0) arr.push(String(angka/i)+String(i));
    }

    for (var i=0; i<arr.length; i++) {
        if (arr[i].length < digit) digit = arr[i].length;
    }
    return digit;
  }
  
  // TEST CASES
  console.log(digitPerkalianMinimum(24)); // 2
  console.log(digitPerkalianMinimum(90)); // 3
  console.log(digitPerkalianMinimum(20)); // 2
  console.log(digitPerkalianMinimum(179)); // 4
  console.log(digitPerkalianMinimum(1)); // 2