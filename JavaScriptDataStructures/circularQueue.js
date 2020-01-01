// class CircularQueue {
//   constructor(size) {
//     this.size = size;
//     this.items = Array(this.size).fill(null);
//     this.front = this.back = -1;
//   }

//   enqueue(item) {
//     //check if full
//     if (
//       this.front % this.size === 0 &&
//       this.back % this.size === this.size - 1
//     ) {
//       return "Array is full";
//     } else if (this.front === -1) {
//       this.front = this.back = 0;
//       this.items[0] = item;
//     } else {
//       this.back = (this.back + 1) % this.size;
//       this.items[this.back] = item;
//     }
//   }

//   dequeue() {
//     if (this.front === -1) {
//       return "There's nothing in the array";
//     } else if (this.front === this.back) {
//       res = this.items[front];
//       this.front = this.back = -1;
//       return res;
//     } else {
//       this.items.shift(); // try this first
//     }
//   }

//   display() {
//     console.log("front: ", this.front, "back: ", this.back);
//     if (this.front === -1) {
//       return "Empty queue";
//     } else if (this.back >= this.front) {
//       console.log("Elements in queue are: ");
//       for (let i = this.front; i <= this.back; i++) {
//         console.log(this.items[i]);
//       }
//     } else {
//       console.log("Elements in queue are: ");
//       for (let i = this.front; i < this.items.length; i++) {
//         console.log(this.items[i]);
//       }
//       for (let i = 0; i <= this.back; i++) {
//         console.log(this.items[i]);
//       }
//     }
//   }
// }

class CircularQueue {
  constructor(size) {
    this.size = size;
    this.front = this.back = -1;
    this.items = [];
  }

  enqueue(e) {
    if (this.front === 0 && this.back % this.size === this.size - 1) {
      return "the queue is full";
    } else if (this.front === -1) {
      this.front = this.back = 0;
      this.items[this.front];
    } else {
      this.back = this.back + (1 % this.size);
      this.items[this.back] = e;
    }
  }

  dequeue() {
    if (this.front === -1) {
      return "Underflow";
    } else if (this.front === this.back) {
      let res = this.items[front];
      this.front = this.back = -1;
      return res;
    } else {
      //   let res = this.items[this.front];
      //   this.items[this.front] = null;
      //   this.front += 1;
      //   return res;
      this.items.shift();
    }
  }

  display() {
    console.log("front: ", this.front, "back: ", this.back);
    if (this.front === -1) {
      return "Empty queue";
    } else if (this.back >= this.front) {
      console.log("Elements in queue are: ");
      for (let i = this.front; i <= this.back; i++) {
        console.log(this.items[i]);
      }
    } else {
      console.log("Elements in queue are: ");
      for (let i = this.front; i < this.items.length; i++) {
        console.log(this.items[i]);
      }
      for (let i = 0; i <= this.back; i++) {
        console.log(this.items[i]);
      }
    }
  }
}

let ob = new CircularQueue(5);
ob.enqueue(1);
ob.enqueue(2);
ob.enqueue(3);
ob.enqueue(4);
ob.enqueue(5);
ob.dequeue(1);
ob.dequeue(2);
ob.display();
