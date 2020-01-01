//import Queue from "./queue";

class Graph {
  constructor(verticesNum) {
    this.verticesNum = verticesNum;
    this.list = new Map();
  }

  addVertex(v) {
    this.list.set(v, []);
  }

  addEdge(v, w) {
    this.list.get(v).push(w);
    this.list.get(w).push(v);
  }

  printGraph() {
    let keys = this.list.keys();
    for (var i of keys) {
      let arr = this.list.get(i);
      let str = "";
      for (var j of arr) {
        str += j + " ";
      }
      console.log(i, "-->", str);
    }
  }

  bfs(startingNode) {
    let visited = [];
    // for (let i = 0; i < this.verticesNum; i++) {
    //   visited[i] = false;
    //   //console.log(visited);
    // }

    let q = [];
    q.push(startingNode);
    visited[startingNode] = true;

    while (q.length !== 0) {
      let p = q.shift();
      console.log(p);
      let neighboursArray = this.list.get(p);
      for (var i in neighboursArray) {
        let neighbour = neighboursArray[i];
        if (!visited[neighbour]) {
          visited[neighbour] = true;
          q.push(neighbour);
        }
      }
    }
  }
}

var g = new Graph(6);
var vertices = ["A", "B", "C", "D", "E", "F"];

// adding vertices
for (var i = 0; i < vertices.length; i++) {
  g.addVertex(vertices[i]);
}

// adding edges
g.addEdge("A", "B");
g.addEdge("A", "D");
g.addEdge("A", "E");
g.addEdge("B", "C");
g.addEdge("D", "E");
g.addEdge("E", "F");
g.addEdge("E", "C");
g.addEdge("C", "F");

//g.printGraph();

g.bfs("A");
