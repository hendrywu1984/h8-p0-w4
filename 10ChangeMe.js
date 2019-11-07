function changeMe(arr) {
  // you can only write your code here!
    if (arr.length === 0) {
        console.log('""');
    } else {
        for (var i=0; i< arr.length; i++) {
            var data = buatObjData(arr[i]);        
            console.log(i+1 + '. ' +data.firstName + ' ' +data.lastName + ':');
            console.log(data);
        }
    }
}

function buatObjData(arr) {
    var tgl=new Date();
    var tahun=tgl.getFullYear();
    
    var data = {};
    data.firstName = arr[0];
    data.lastName = arr[1];
    data.gender = arr[2];    
    if (arr.length < 4 || arr[3] > tahun) data.age = 'Invalid Birth Year';
    else data.age = tahun - arr[3];
    
    return data;    
}

// TEST CASES
changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); // 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 37 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
changeMe([]); // ""