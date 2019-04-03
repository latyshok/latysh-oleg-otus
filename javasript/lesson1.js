function sum(a) {

    var currentSum = !isNaN(a) ? a : 0;

    function f(b) {
        if(!arguments.length || b === undefined)
            return currentSum;

        currentSum += !isNaN(b) ? b : 0;

        return f;
    }

    return f;
}

alert(sum(false)('sadfasdf')(true)({})([1,2,3,4,5])(10)(13)());