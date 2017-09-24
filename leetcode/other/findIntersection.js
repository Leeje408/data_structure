/**
 * @function findIntersction
 * @param {Array.<Number>} s1
 * @param {Array.<Number>} s2
 * @returns {Array.<Number>} 交集
 * @description 获取两个递增集合的交集
 * @example
 * Input:
 * S1 = [1,3,6,7,9]
 * S2 = [2,3,5,9]
 * Output:
 * [3,9]
 */


function findIntersection(s1, s2) {
  var p1 = p2 = 0
  var result = []
  while (p1 < s1.length && p2 < s2.length) {
    if (s1[p1] == s2[p2]) {
      result.push(s1[p1])
      p1++    // p1 或 p2 向后移动
    } else if (s1[p1] > s2[p2]) {
      p2++
    } else {
      p1++
    }
  }
  return result
}