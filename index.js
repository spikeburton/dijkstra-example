const { WGraph } = require('./wgraph');

const graph = new WGraph();
graph.addVertex('a');
graph.addVertex('b');
graph.addVertex('c');
graph.addVertex('d');
graph.addVertex('e');
graph.addVertex('f');
graph.addEdge('a','b',4);
graph.addEdge('a','c',2);
graph.addEdge('b','e',3);
graph.addEdge('c','d',2);
graph.addEdge('c','f',4);
graph.addEdge('d','f',1);
graph.addEdge('d','e',3);
graph.addEdge('e','f',1);

const result = graph.shortestPath('a', 'e');
console.log('Shortest path from a to e: ',result);
