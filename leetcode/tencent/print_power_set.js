function powerSet(array, index, result) {
    index = index || 0
    result = result || []
    if(index >= array.length) {
        return 0
    }
    var tmp = []
    tmp.push(array[index])
    powerSet(array, index + 1, result)
    var result_length = result.length
    for(var i = 0; i < result_length; i++) {
        var cache = result[i<<1].slice()
        cache.unshift(array[index])
        result.unshift(cache)
    }
    result.unshift(tmp)
    console.log(JSON.stringify(result))
    if (index == 0) {
        return result
    }
}

function _test_(array) {
    console.log('result:' + JSON.stringify(powerSet(array)))
}