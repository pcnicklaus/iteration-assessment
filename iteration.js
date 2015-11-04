////// sum of columns
///////////
function sum (array) {
    var answerArray = [];
    var tempSum = '';
    var arrayInsideLength = array[1].length
    console.log(arrayInsideLength)
        // it won't let me use array[1].length
    for (var i = 0; i < arrayInsideLength; i ++) {
        tempSum = 0
        for (var j = 0; j < array.length; j ++ ) {
            tempSum += array[j][i]
        }
          answerArray.push( tempSum)
    }
    return answerArray
}




function reverse (array) {
    var answer = []
    for (var i = 0; i < array.length; i ++) {
        answer.unshift(array[i]);
        console.log(answer)
    }
    return answer
}

reverse([4,5,6,7,8,9])


function sumColumns (array) {
    var array1 = array[0]
    var array2 = array[1]
    console.log(array1[0])
    console.log(array2[0])
    var answerArray = []
    for (var i = 0; i < 2; i ++) {
        answerArray.push(array1[i] + array2[i]);

    }
    return answerArray;
}
 var array = [[1,2],[1,2],];
    sumColumns(array)

function sumColumns (array) {
    var answerArray = []
    if (array.length === 2) {
        var array1 = array[0]
        var array2 = array[1]
        for (var i = 0; i < 2; i ++) {
            answerArray.push(array1[i] + array2[i])
        }
        return answerArray;
    } else {
        var array1 = array[0]
        var array2 = array[1]
        var array3 = array[2];
        console.log(array[2])
        for (var i = 0; i < array.length; i ++) {
            answerArray.push(array1[i] + array2[i] + array3[i])
        }
           return answerArray;
    }
}
 var array = [[1,2],[1,2],[1,2]];
    sumColumns(array)

////////////
// transpose working
//////////////

function transpose (array) {
    var output = [];
    var output2 = [];
    for (var i = 0; i < 4; i ++) {
        for (var j = 0; j < 1; j ++) {
            output.push(array[i][j])
        }
       output2.push(output)
    }
    return output2
}

var array = [
      ['a', 'a', 'a', 'a'],
      ['b', 'b', 'b', 'b'],
      ['c', 'c', 'c', 'c'],
      ['d', 'd', 'd', 'd'],
    ];

transpose(array)



function transpose (array) {
    var output = [];
    var output2 = [];
    for (var i = 0; i < 4; i ++) {
        for (var j = 0; j < 1; j ++) {
            output.push(array[i][j])
        }
       output2.push(output)
    }
    return output2
}

var array = [
      ['a', 'a', 'a', 'a'],
      ['b', 'b', 'b', 'b'],
      ['c', 'c', 'c', 'c'],
      ['d', 'd', 'd', 'd'],
    ];

transpose(array)



///////////////
// sum columns
/////////////
function sum (array) {
    var answerArray = [];
    if (array.length === 2) {
        var array1 = array[0]
        var array2 = array[1]
        for (var i = 0; i < 2; i ++) {
            answerArray.push(array1[i] + array2[i])
        }
        return answerArray;
    } else if (array.length === 4) {
        var array1 = array[0];
        var array2 = array[1];
        var array3 = array[2];
        var array4 = array[3]
        for (var i = 0; i < 3; i ++) {
            answerArray.push(array1[i] + array2[i] + array3[i] + array4[i]);
        }
        return answerArray
    }
}
var array = [ [2,4,6],[2,4,6],[2,4,6],[2,4,6] ];
sum(array)

function sum (array) {
    var answerArray = [];
    var tempSum = '';
    for (var i = 0; i < 3; i ++) {
        tempSum = 0
        for (var j = 0; j < 4; j ++ ) {
            tempSum += array[j][i]
        }
          answerArray.push( tempSum)
    }
    return answerArray
}

var array = [ [2,4,6],[2,4,6],[2,4,6],[2,4,6] ]
sum(array)

function transpose (array) {
    var answerArray = [];
    for (var i = 0; i < array.length; i ++) {
        var row = [];
        for (var j = 0; j < array[1].length; j ++ ) {
            row.push(array[j][i]);
        }
          answerArray.push(row);
    }
    return answerArray;
}
