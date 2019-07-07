class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(value, priority) {
    this.values.push({
      value,
      priority
    });

    if (this.values.length === 1) return this;
    let i = this.values.length - 1;
    while (i > 0) {
      let pIdx = Math.floor((i-1) / 2);
      let parent = this.values[pIdx];
      let cur = this.values[i];

      if (cur.priority < parent.priority) {
        this.values[i] = parent;
        this.values[pIdx] = cur;
        i = pIdx;
      } else break;
    }
    return this;
  }

  dequeue() {
    let result = this.values[0];
    const last = this.values.pop();
    if (this.values.length === 0) return result;
    this.values[0] = last;

    let swap, i = 0;
    const length = this.values.length;
    do {
      swap = null;
      let cur = this.values[i];
      let il = (i * 2) + 1, ir = (i * 2) + 2;
      let left, right;

      if (il < length) {
        left = this.values[il].priority;
        if (cur.priority > left)
          swap = il;
      }
      if (ir < length) {
        right = this.values[ir].priority;
        if ((swap && right < left) || (!swap && cur.priority > right))
          swap = ir;
      }
      if (swap) {
        this.values[i] = this.values[swap];
        this.values[swap] = cur;
        i = swap;
      }
    } while (swap);

    return result;
  }
}

module.exports = { PriorityQueue };
