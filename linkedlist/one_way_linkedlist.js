//每次使用_this.add()添加的项，将成为表头；而location位置信息，从表尾的0开始算起，符合添加的顺序
window.onload = function(){
    var nlist = createList();
    nlist.add(1);
    nlist.add(2);
    nlist.add(3);
    nlist.remove(3);
    nlist.insert(4,1);
    console.log("get(3):" + nlist.get(3));
    console.log("at(2).data:" + nlist.at(2).data);
    nlist.show();
}
//单链表
function createList(){
    var _this = {}, head = null; //head 总为单链表表头
    _this.length = 0;
    //添加节点
    _this.add = function(value){
        head = {
            data : value,
            next : head || null
        };
        _this.length ++;
    }
    //删除节点
    _this.remove = function(value){
        var ptemp = head;
        var temp = head;
        for(var i = 0; i < _this.length; i++){
            if(temp.data == value){
                if(temp == head){
                    head = temp.next;
                } else{
                    ptemp.next = temp.next;
                }
                temp.next = null;
                temp = null;
                _this.length --;
                return 1; //已经从链表中移除
            }
            ptemp = temp;
            temp = temp.next;
        }
        return 0; //找不到相关节点
    }
    //查找节点（内容）
    _this.get = function(value){
        var temp = head;
        for(var i = _this.length; i > 0; i--){
            if(value == temp.data){
                return i - 1;
            }
            temp = temp.next;
        }
        return -1;
    }
    //查找节点（位置）
    _this.at = function(location){
        var temp = head;
        for(var i = 0; i < (_this.length - location - 1); i++){
            temp = temp.next;
        }
        return temp;
    }
    //插入节点
    _this.insert = function(value,location){
        var temp = _this.at(location);
        var phead = head;
        _this.add(value);
        head.next = temp.next;
        temp.next = head;
        head = phead;
    }
    //显示全部节点
    _this.show = function(){
        if(head == null) {
            alert("nothing");
            return 0;
        }
        var body = document.getElementsByTagName("body")[0];
        var table = _addElement("table");
        table.id = "table_list";
        var trth = _addElement("tr");
        var th1 = _addElement("th"); 
        var th2 = _addElement("th");
        var tx1 = _addTextNode("Data");
        var tx2 = _addTextNode("Location");
        th1.appendChild(tx1);
        th2.appendChild(tx2);
        trth.appendChild(th1);
        trth.appendChild(th2);
        var temp = head;
        for(var i = _this.length; i > 0; i--){
            var trtd = _addElement("tr");
            var td1 = _addElement("td");
            var td2 = _addElement("td");
            var t1 = _addTextNode(temp.data);
            var t2 = _addTextNode(i - 1);
            td1.appendChild(t1);
            td2.appendChild(t2);
            trtd.appendChild(td1);
            trtd.appendChild(td2);
            _preappend(trtd, table);
            temp = temp.next;
        }
        _preappend(trth, table);
        body.appendChild(table);
        return 1;
    }
    return _this;
}
function _addElement(name){
    return document.createElement(name);
}
function _addTextNode(text){
    return document.createTextNode(text);
}
function _preappend(node, pNode){
    if(node.nodeType != 1 || pNode.nodeType != 1){
        return 0;
    }
    if(!pNode.firstChild){
        pNode.appendChild(node);
    } else {
        pNode.insertBefore(node, pNode.firstChild);
    }
    return 1;
}