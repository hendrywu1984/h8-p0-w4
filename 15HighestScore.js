function highestScore (students) {
  // Code disini
  var result = {};
  var isAda = false;
  
  for (var i = 0; i < students.length; i++) {
    isAda = false;
    
    for(var j = 0; j < Object.keys(result).length; j++){
      if (Object.keys(result)[j] === students[i].class) {
        if(students[i].score > result[students[i].score]) {
          result[students[i].class] = students[i]
          delete result[students[i].class].class;
        }
        isAda = true;
      }
    }
    if (isAda === false) {
      result[students[i].class] = students[i]
      delete result[students[i].class].class;
    }
  }
  return result;
}

// TEST CASE
console.log(highestScore([
  {
    name: 'Dimitri',
    score: 90,
    class: 'foxes'
  },
  {
    name: 'Alexei',
    score: 85,
    class: 'wolves'
  },
  {
    name: 'Sergei',
    score: 74,
    class: 'foxes'
  },
  {
    name: 'Anastasia',
    score: 78,
    class: 'wolves'
  }
]));

// {
//   foxes: { name: 'Dimitri', score: 90 },
//   wolves: { name: 'Alexei', score: 85 }
// }


console.log(highestScore([
  {
    name: 'Alexander',
    score: 100,
    class: 'foxes'
  },
  {
    name: 'Alisa',
    score: 76,
    class: 'wolves'
  },
  {
    name: 'Vladimir',
    score: 92,
    class: 'foxes'
  },
  {
    name: 'Albert',
    score: 71,
    class: 'wolves'
  },
  {
    name: 'Viktor',
    score: 80,
    class: 'tigers'
  }
]));

// {
//   foxes: { name: 'Alexander', score: 100 },
//   wolves: { name: 'Alisa', score: 76 },
//   tigers: { name: 'Viktor', score: 80 }
// }


console.log(highestScore([])); //{}