class Queue {
  constructor() {
    this.items = [];
  }
  enque(item) {
    this.items.push(item);
  }
  dequeue() {
    if (this.isEmpty()) return "Underflow";
    return this.items.shift();
  }
  front() {
    if (this.isEmpty()) return "Underflow";
    return this.items[0];
  }
  isEmpty() {
    return this.items.length === 0;
  }
  printQueue() {
    var str = "";
    for (let i = 0; i < this.items.length; i++) {
      str += this.items[i] + " ";
    }
    return str;
  }
}

// let queue = new Queue();

// queue.enque("l");
// queue.enque(1);
// console.log(queue);
// queue.dequeue();
// console.log(queue);

export default Queue;
