class Stack {
  constructor() {
    this.items = [];
  }
  push(e) {
    this.items.push(e);
  }
  pop() {
    if (this.items.length === 0) return "underflow";
    return this.items.pop();
  }
  peek() {
    return this.items(this.items.length - 1);
  }
  isEmpty() {
    return this.items.length === 0;
  }
  printStack() {
    let str = "";
    for (i = 0; i < this.items.length; i++) {
      str += this.items[i] + " ";
    }
    return str;
  }
}

let stack = new Stack();
stack.push(1);
console.log("stack: ", stack);
