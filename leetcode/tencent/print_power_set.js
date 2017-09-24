/**
 * @function powerSet
 * @param {Array} array 集合
 * @param {Number} index 初始为null或0
 * @param {Array} result 子集包含空集
 * @returns {Array} 递归，返回所有子集集合
 * @description 打印集合的所有子集，方法为在子集上添加元素来产生另一个子集
 * @example
 * Input:
 * S = [1,2,3]
 * Output:
 * []
 * [1] [2] [3]
 * [1,2] [2,3] [1,3]
 * [1,2,3]
 */

function powerSet(array, index, result) {
    index = index || 0
    result = result || []
    if (index >= array.length) {
        return 0
    }
    var tmp = []
    tmp.push(array[index])
    powerSet(array, index + 1, result)
    var result_length = result.length
    for (var i = 0; i < result_length; i++) {
        /**
         * @description 复制之前子集，添加元素，产生另一个子集，故查询索引为原来的两倍
         */
        var cache = result[i << 1].slice()
        cache.unshift(array[index])
        result.unshift(cache)
    }
    result.unshift(tmp)
    if (index == 0) {
        return result
    }
}

/**
 * @function printPowerSet
 * @param {Array} array 待打印子集
 * @description 使用二进制位表示元素，0不打印，1则打印
 * @example
 * {1,2,3}
 * 二进制为 111 则打印 123
 * 二进制位 001 则打印 1
 * 此处二进制第一位表示为元素在集合中的位置
 */
function printPowerSet(array) {
    var len = array.length
    var total = 1 << len
    // i = 1 跳过空子集情况
    for (var i = 0; i < total; i++) {
        var tmp = []
        for (var j = 0; j < len; j++) {
            if ((i >> j & 1) == 1) {
                tmp.push(array[j])
            }
        }
        console.log(JSON.stringify(tmp))
    }
}

function _test_(array) {
    console.log('result:' + JSON.stringify(powerSet(array)))
}