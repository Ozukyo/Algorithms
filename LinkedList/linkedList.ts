interface LinkedListDao {
    add(value: string): void;

    insert(index: number, value: string): void;

    remove(listNode: ListNode): void;
}

class LinkedList implements LinkedListDao {
    _head: ListNode | null;

    constructor() {
        this._head = null;
    }

    add(value: string) {
        let listNode: ListNode = new ListNode(value);
        let currentNode: ListNode = <ListNode>this._head;
        while (currentNode.nextNode !== null) {
            currentNode = currentNode.nextNode;
        }
        currentNode.nextNode = listNode;
    }

    insert(index: number, value: string) {
        let listNode: ListNode = new ListNode(value);

        if (index == 0) {
            listNode.nextNode = this.head;
            this.head = listNode;
            return;
        }
        let previousNode: ListNode;
        let destinationNode: ListNode;

        let indexCounter: number = 0;
        let currentNode: ListNode = this.head;
        while (indexCounter < index - 1) {
            currentNode = currentNode.nextNode;
            indexCounter++;
        }

        previousNode = currentNode;
        destinationNode = currentNode.nextNode;
        listNode.nextNode = destinationNode;
        previousNode.nextNode = listNode;

    }

    remove(listNode: ListNode) {
    }

    get head(): ListNode {
        // @ts-ignore
        return this._head;
    }

    set head(listNode: ListNode) {
        this._head = listNode;
    }
}

class ListNode {
    private _value: string;
    private _nextNode: ListNode | null;

    constructor(value: any) {
        this._value = value;
        this._nextNode = null;
    }


    get nextNode(): ListNode {
        return <ListNode>this._nextNode;
    }

    set nextNode(value: ListNode) {
        this._nextNode = value;
    }

    get value(): string {
        return this._value;
    }

    public toString(): string {
        // @ts-ignore
        return `This node value: ${this.value}, next node value: ${this._nextNode.value}`;
    }

}


function main1(): void {
    let linkedList: LinkedList = new LinkedList();
    linkedList.add("First node- header");
    linkedList.add("Second node");
    linkedList.add("Third node");
    console.log(linkedList.head.toString());


}

main1();
