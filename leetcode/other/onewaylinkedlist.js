function owlinkedList() {
    var head = null
    var _el = function() {
        var node = null
        var value = null
        var next = null
        this.init = function(_node, _value, _next) {
            if(!!_node || !!_value) {
                console.log('create el failed')
            }
            node = _node
            value = _value
            next = _next || null
        }
        this.setNext = function(el) {
            if(!(el instanceof _el)) {
                console.log('invalid params')
                return false
            }
            next = el
            return true
        }
        this.getNext = function() {
            return next
        }
        this.setValue = function(v) {
            value = v
        }
    }

    this.add = function (node, value) {
        // 在链表最后添加节点
        var newNode = new _el()
        newNode.init(node, value, null)
        var point = head
        while(!!point) {
            point = point.getNext()
        }
        point = newNode
    }
    /**
     * insert 如果链表为空，则添加头节点
     * 如果index大于链表大小，则在末尾处添加
     */
    this.insert =  function(node, value, index) {
        if(isEmpty()) {
            return this.add(node, value)
        }
        if(index < 0) {
            console.log('invalid index')
            return false
        }
        var newNode = new _el()
        newNode.init(node, value, null)
        if(index == 0) {
            newNode.setNext(head)
            head = newNode
            return true
        }
        var point = next = head
        while(!!next && index-- >= 0) {
            point = next
            next = next.getNext()
        }
        if(!!point.setNext(newNode) || !!newNode.setNext(next)) {
            console.log('insert failed')
            return false
        }
        return true
    }
    this.getHead = function() {
        return head
    }
    this.isEmpty = function() {
        return !!head
    }
}