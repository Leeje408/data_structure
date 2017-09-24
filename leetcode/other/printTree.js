/**
 * @param {Number} treeRoot - 树根节点
 * @description 打印二叉树结点
 * @example
 * 树结构如下：
 *       1
 *     /   \
 *    2     3
 *   /  \   /
 *  4    5  6
 *        \
 *         7
 *  Output:
 *  1
 *  2 3
 *  4 5 6
 *  7
 */
function printTree(treeRoot) {
  var stack1 = []
  var stack2 = []
  var p = {
    now: stack1,
    other: stack2,
    change: function() {
      var tmp = this.now
      this.now = this.other
      this.other = tmp
    },
    push2Other: function(node) {
      this.other.push(node)
    }
  }
  stack1.push(treeRoot)
  while (p.now.length > 0) {
    var str = []
    while(p.now.length > 0) {
      var node = p.now.shift()
      str.push(node.value)
      if(node.left != null)
        p.push2Other(node.left)
      if(node.right != null)
        p.push2Other(node.right)
    }
    p.change()
    console.log(str.toString())
  }
}

/**
 * @function treeNode
 * @constructor
 * @param {any} value
 * @param {treeNode} left
 * @param {treeNode} right
 */
function treeNode(value, left, right) {
  this.value = value
  this.left = left
  this.right = right
}

/**
 * @function creatTree
 * @description 构造树结构-中序
 * @param {Array} nodeList 待构造数组
 * @param {Number} pre 前置数组索引
 * @param {Number} post 后置数组索引
 * @returns {treeNode} 递归，返回根节点
 */
function creatTree(nodeList, pre, post) {
  if(pre == post) {
    return new treeNode(nodeList[pre], null, null)
  }
  var mid = (post + pre) >> 1
  var left = right = null
  if(pre < mid)
    left = creatTree(nodeList, pre, mid - 1)
  if(post > mid)
    right = creatTree(nodeList, mid + 1, post)
  return new treeNode(nodeList[mid], left, right)
}