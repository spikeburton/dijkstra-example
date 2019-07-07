const { PriorityQueue } = require('./pq');

class WGraph {
  constructor() {
    this.adjList = {};
  }

  addVertex(v) {
    if (!this.adjList[v]) {
      this.adjList[v] = [];
      return true;
    }
    return false;
  }

  addEdge(v1,v2, weight) {
    if (this.adjList[v1] && this.adjList[v2]) {
      this.adjList[v1].push({
        node: v2,
        weight
      });
      this.adjList[v2].push({
        node: v1,
        weight
      });
      return true;
    }
    return false;
  }

  shortestPath(v1,v2) {
    const pq = new PriorityQueue();
    const history = {}, distances = {};

    for (let key in this.adjList) {
      if (key === v1) {
        pq.enqueue(key, 0);
        distances[key] = 0;
      } else {
        pq.enqueue(key, Infinity);
        distances[key] = Infinity;
      }
      history[key] = null;
    }

    while(pq.values.length) {
      let cur = pq.dequeue().value;
      if (cur === v2) {
        const path = [], distance = distances[cur];
        while (cur) {
          path.push(cur);
          cur = history[cur];
        }

        return({
          path: path.reverse(),
          distance
        });
      }

      for (let neighbor of this.adjList[cur]) {
        let d = distances[cur] === Infinity ? 0 : distances[cur];
        d += neighbor.weight;

        if (d < distances[neighbor.node]) {
          distances[neighbor.node] = d;
          history[neighbor.node] = cur;
          pq.enqueue(neighbor.node, neighbor.weight);
        }
      }
    }
  }
}

module.exports =  { WGraph };
