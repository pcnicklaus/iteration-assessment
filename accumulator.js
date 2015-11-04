function one(string, number) {
    var output = '';
    var a = string.toUpperCase()
    for (var i = 0; i < number; i++) {
        output += '!'
    }
    return output + a + output
}

one('hello', 4)
one('good times', 2)


function justify(price, side, number, symbol) {
    if (side === 'left') {
        var spaces = number - price.length
        var filler = '';
        console.log(price.length)
        console.log(spaces);
        for (var i = 0; i < spaces; i++) {
            filler += symbol;
        }
        console.log(filler);
    }
    console.log(price + filler);
    return price + filler;
}

justify('$12.98', 'left', 10, ' ');

function objectify(array) {
    var object = {};
    array.forEach(function (element) {
        object[element[0]] = element[1];
    });
    return object;
}




var array = [['bert', 'a'], ['ernie', 'b'], ['lou', 'c']];

function objectify(array) {
    for (var i = 0; i < array.length; i++) {
        if (array[i][0] = array[i + 1][0]) {

        }
    }

    var object = {};
    array.forEach(function (element) {
        object[element[0]] = element[1];
    });
    object.sort();
    for (var i = 0; i < object.length; i++) {
        if (object[i - 1] !== object[i]) {
            return object;
        } else {
            return {}
        }

        var array = [['bert', 'ernie'], ['bert', 'boson'], ['tom', 'jerry']]

        function objectify(array) {
            array = array.sort();
            //  console.log(array)
            //  console.log(array[0][0])
            for (var i = 0; i < array.length + 1; i++) {
                if (array[i][i] === array[i + 1][i]) {
                    console.log('firing');
                }
            }
        }

        objectify(array)