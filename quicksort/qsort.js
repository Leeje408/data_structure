function sortUtil() {
  var loopTime = 0
  var hasError = false
  this.config = {}
  this.config.echoLoopTime = true
  this.config.echoProcess = false

  this.qSort = function (array, head, tail, order) {
    if (!(array instanceof Array) || (typeof head != 'number') || (typeof tail != 'number')) {
      console.log('Error Type')
      return -1
    }
    if (head >= tail) {
      return 0
    }
    var orderRule = typeof order == 'number' ? order : 1
    var key = array[head]
    var ahead = head,
      behind = tail
    while (!hasError && ahead < behind) {
      loopTime++
      while (!hasError && ahead < behind && this.compare(key, array[behind], orderRule)) {
        behind--
      }
      array[ahead] = array[behind]
      if (this.config.echoProcess) console.log(' * ' + JSON.stringify(array))
      while (!hasError && ahead < behind && this.compare(array[ahead], key, orderRule)) {
        ahead++
      }
      array[behind] = array[ahead]
      if (this.config.echoProcess) console.log(' * ' + JSON.stringify(array))
    }
    array[ahead] = key
    if (!hasError) {
      if (this.config.echoProcess) console.log(' * ' + JSON.stringify(array))
      this.qSort(array, head, ahead - 1, orderRule)
      this.qSort(array, ahead + 1, tail, orderRule)
      if (this.config.echoLoopTime && (tail - head + 1) == array.length) {
        console.log('loop time:' + loopTime)
        loopTime = 0
      }
    } else {
      /** 重置 hasError */
      hasError = false
    }
  }

  this.compare = function (var1, var2, rule) {
    var v1 = parseInt(var1)
    var v2 = parseInt(var2)
    /**
     * 使用 hasError 标识是否发生错误
     * 防止出现 NaN 使比较都为 false 导致死循环
     */
    if (isNaN(v1) || isNaN(v2)) {
      console.log('can not be compared : ' + var1 + ' ' + var2)
      hasError = true
      return false
    }
    if (rule <= 0) {
      return v1 <= v2
    }
    return v1 >= v2
  }
}

function testMain(o, array) {
  var testArray = array || [2, 1, 4, 3, 4, 5, 0, 5, 6, 1]
  var sort = new sortUtil()
  sort.qSort(testArray, 0, testArray.length - 1, o)
  console.log(testArray)
}