var Stack = /** @class */ (function () {
    function Stack() {
        this._arr = [];
    }
    Stack.prototype.pop = function () {
        return this._arr.pop();
    };
    Stack.prototype.push = function (element) {
        this._arr.push(element);
    };
    Stack.prototype.clean = function () {
        this._arr = [];
    };
    Object.defineProperty(Stack.prototype, "arr", {
        get: function () {
            return this._arr;
        },
        enumerable: false,
        configurable: true
    });
    return Stack;
}());
/////////////////////////////////////////////////////
function main() {
    var stack = new Stack();
    stack.push("First function");
    stack.push("Second function");
    stack.push("Third function");
    console.log(stack.pop());
}
main();
