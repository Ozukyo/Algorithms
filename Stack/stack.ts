interface StackDao {
    push<T>(element: T): void;

    pop(): any;

    clean(): void;
}

class Stack implements StackDao {
    private _arr: any[];

    constructor() {
        this._arr = [];
    }

    public pop<T>(): T {
        return this._arr.pop();
    }

    public push<T>(element: T): void {
        this._arr.push(element);
    }

    public clean(): void {
        this._arr = [];
    }

    public get arr(): any[] {
        return this._arr;
    }
}

/////////////////////////////////////////////////////
function main(): void {
    let stack: Stack = new Stack();
    stack.push("First function");
    stack.push("Second function");
    stack.push("Third function");

    console.log(stack.pop());
}

main();