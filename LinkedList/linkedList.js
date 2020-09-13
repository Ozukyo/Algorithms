var LinkedList = /** @class */ (function () {
    function LinkedList() {
        this._head = null;
    }
    LinkedList.prototype.add = function (value) {
        var listNode = new ListNode(value);
        var currentNode = this._head;
        while (currentNode.nextNode !== null) {
            currentNode = currentNode.nextNode;
        }
        currentNode.nextNode = listNode;
    };
    LinkedList.prototype.insert = function (index, value) {
        var listNode = new ListNode(value);
        if (index == 0) {
            listNode.nextNode = this.head;
            this.head = listNode;
            return;
        }
        var previousNode;
        var destinationNode;
        var indexCounter = 0;
        var currentNode = this.head;
        while (indexCounter < index - 1) {
            currentNode = currentNode.nextNode;
            indexCounter++;
        }
        previousNode = currentNode;
        destinationNode = currentNode.nextNode;
        listNode.nextNode = destinationNode;
        previousNode.nextNode = listNode;
    };
    LinkedList.prototype.remove = function (listNode) {
    };
    Object.defineProperty(LinkedList.prototype, "head", {
        get: function () {
            // @ts-ignore
            return this._head;
        },
        set: function (listNode) {
            this._head = listNode;
        },
        enumerable: false,
        configurable: true
    });
    return LinkedList;
}());
var ListNode = /** @class */ (function () {
    function ListNode(value) {
        this._value = value;
        this._nextNode = null;
    }
    Object.defineProperty(ListNode.prototype, "nextNode", {
        get: function () {
            return this._nextNode;
        },
        set: function (value) {
            this._nextNode = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ListNode.prototype, "value", {
        get: function () {
            return this._value;
        },
        enumerable: false,
        configurable: true
    });
    ListNode.prototype.toString = function () {
        // @ts-ignore
        return "This node value: " + this.value + ", next node value: " + this._nextNode.value;
    };
    return ListNode;
}());
function main1() {
    var linkedList = new LinkedList();
    linkedList.add("First node- header");
    linkedList.add("Second node");
    linkedList.add("Third node");
    console.log(linkedList.head.toString());
}
main1();
