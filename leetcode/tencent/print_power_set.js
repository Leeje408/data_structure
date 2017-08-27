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

function printPowerSet(array) {
    /**
     * 使用二进制位表示元素，0不打印，1则打印
     * e.g {1,2,3}
     * 二进制为 111 则打印 123
     * 二进制位 001 则打印 1
     * 此处二进制第一位表示为元素在集合中的位置
     */
    
}

function _test_(array) {
    console.log('result:' + JSON.stringify(powerSet(array)))
}