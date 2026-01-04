export const dataStructures = {
  arrays: {
    id: 'arrays',
    name: 'Arrays',
    icon: 'LayoutGrid',
    color: 'blue',
    description: 'A contiguous block of memory storing elements of the same type, accessed by index.',
    complexity: {
      access: { time: 'O(1)', space: 'O(1)' },
      search: { time: 'O(n)', space: 'O(1)' },
      insertion: { time: 'O(n)', space: 'O(1)' },
      deletion: { time: 'O(n)', space: 'O(1)' }
    },
    spaceComplexity: 'O(n)',
    keyFeatures: [
      'Random access in constant time',
      'Cache-friendly due to contiguous memory',
      'Fixed size (static arrays) or dynamic resizing',
      'Index-based access starting from 0'
    ],
    useCases: [
      'Storing sequential data',
      'Implementing other data structures (stacks, queues, heaps)',
      'Matrix operations',
      'Lookup tables and buffers'
    ],
    algorithms: [
      { name: 'Binary Search', complexity: 'O(log n)' },
      { name: 'Two Pointers', complexity: 'O(n)' },
      { name: 'Sliding Window', complexity: 'O(n)' },
      { name: 'Kadane\'s Algorithm', complexity: 'O(n)' }
    ],
    funFacts: [
      'Arrays are the basis for most other data structures',
      'Modern CPUs are optimized for array traversal due to cache prefetching',
      'Dynamic arrays (like ArrayList) typically grow by 1.5x or 2x when full'
    ],
    leetcodeProblems: [
      { id: 1, name: 'Two Sum', difficulty: 'Easy', url: 'https://leetcode.com/problems/two-sum/' },
      { id: 121, name: 'Best Time to Buy and Sell Stock', difficulty: 'Easy', url: 'https://leetcode.com/problems/best-time-to-buy-and-sell-stock/' },
      { id: 217, name: 'Contains Duplicate', difficulty: 'Easy', url: 'https://leetcode.com/problems/contains-duplicate/' },
      { id: 53, name: 'Maximum Subarray', difficulty: 'Medium', url: 'https://leetcode.com/problems/maximum-subarray/' },
      { id: 238, name: 'Product of Array Except Self', difficulty: 'Medium', url: 'https://leetcode.com/problems/product-of-array-except-self/' },
      { id: 15, name: '3Sum', difficulty: 'Medium', url: 'https://leetcode.com/problems/3sum/' },
      { id: 11, name: 'Container With Most Water', difficulty: 'Medium', url: 'https://leetcode.com/problems/container-with-most-water/' },
      { id: 33, name: 'Search in Rotated Sorted Array', difficulty: 'Medium', url: 'https://leetcode.com/problems/search-in-rotated-sorted-array/' },
      { id: 152, name: 'Maximum Product Subarray', difficulty: 'Medium', url: 'https://leetcode.com/problems/maximum-product-subarray/' },
      { id: 42, name: 'Trapping Rain Water', difficulty: 'Hard', url: 'https://leetcode.com/problems/trapping-rain-water/' }
    ],
    codeExample: `// JavaScript Array Operations
const arr = [1, 2, 3, 4, 5];

// Access - O(1)
const element = arr[2]; // 3

// Search - O(n)
const index = arr.indexOf(4); // 3

// Insert at end - O(1) amortized
arr.push(6); // [1, 2, 3, 4, 5, 6]

// Insert at beginning - O(n)
arr.unshift(0); // [0, 1, 2, 3, 4, 5, 6]

// Delete from end - O(1)
arr.pop(); // [0, 1, 2, 3, 4, 5]

// Delete from beginning - O(n)
arr.shift(); // [1, 2, 3, 4, 5]

// Two Pointers Example
function twoSum(arr, target) {
  let left = 0, right = arr.length - 1;
  while (left < right) {
    const sum = arr[left] + arr[right];
    if (sum === target) return [left, right];
    if (sum < target) left++;
    else right--;
  }
  return [-1, -1];
}`
  },

  linkedLists: {
    id: 'linked-lists',
    name: 'Linked Lists',
    icon: 'Link',
    color: 'green',
    description: 'A linear collection of nodes where each node points to the next node in the sequence.',
    complexity: {
      access: { time: 'O(n)', space: 'O(1)' },
      search: { time: 'O(n)', space: 'O(1)' },
      insertion: { time: 'O(1)', space: 'O(1)' },
      deletion: { time: 'O(1)', space: 'O(1)' }
    },
    spaceComplexity: 'O(n)',
    keyFeatures: [
      'Dynamic size - grows and shrinks easily',
      'Efficient insertion/deletion at known positions',
      'No memory waste from pre-allocation',
      'Types: Singly, Doubly, Circular'
    ],
    useCases: [
      'Implementing stacks and queues',
      'Browser history (back/forward)',
      'Music playlist (next/previous)',
      'Undo functionality in applications'
    ],
    algorithms: [
      { name: 'Floyd\'s Cycle Detection', complexity: 'O(n)' },
      { name: 'Reverse Linked List', complexity: 'O(n)' },
      { name: 'Merge Two Sorted Lists', complexity: 'O(n + m)' },
      { name: 'Find Middle Element', complexity: 'O(n)' }
    ],
    funFacts: [
      'Linked lists were invented around 1955-1956 at RAND Corporation',
      'The garbage collector in many languages uses linked lists internally',
      'Doubly linked lists use 2x the pointer memory but enable O(1) deletion'
    ],
    leetcodeProblems: [
      { id: 206, name: 'Reverse Linked List', difficulty: 'Easy', url: 'https://leetcode.com/problems/reverse-linked-list/' },
      { id: 21, name: 'Merge Two Sorted Lists', difficulty: 'Easy', url: 'https://leetcode.com/problems/merge-two-sorted-lists/' },
      { id: 141, name: 'Linked List Cycle', difficulty: 'Easy', url: 'https://leetcode.com/problems/linked-list-cycle/' },
      { id: 876, name: 'Middle of the Linked List', difficulty: 'Easy', url: 'https://leetcode.com/problems/middle-of-the-linked-list/' },
      { id: 19, name: 'Remove Nth Node From End of List', difficulty: 'Medium', url: 'https://leetcode.com/problems/remove-nth-node-from-end-of-list/' },
      { id: 143, name: 'Reorder List', difficulty: 'Medium', url: 'https://leetcode.com/problems/reorder-list/' },
      { id: 142, name: 'Linked List Cycle II', difficulty: 'Medium', url: 'https://leetcode.com/problems/linked-list-cycle-ii/' },
      { id: 148, name: 'Sort List', difficulty: 'Medium', url: 'https://leetcode.com/problems/sort-list/' },
      { id: 138, name: 'Copy List with Random Pointer', difficulty: 'Medium', url: 'https://leetcode.com/problems/copy-list-with-random-pointer/' },
      { id: 23, name: 'Merge k Sorted Lists', difficulty: 'Hard', url: 'https://leetcode.com/problems/merge-k-sorted-lists/' }
    ],
    codeExample: `// JavaScript Linked List Implementation
class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // Insert at head - O(1)
  insertAtHead(val) {
    const newNode = new ListNode(val);
    newNode.next = this.head;
    this.head = newNode;
    this.size++;
  }

  // Delete node - O(n) to find, O(1) to delete
  delete(val) {
    if (!this.head) return;
    if (this.head.val === val) {
      this.head = this.head.next;
      this.size--;
      return;
    }
    let curr = this.head;
    while (curr.next && curr.next.val !== val) {
      curr = curr.next;
    }
    if (curr.next) {
      curr.next = curr.next.next;
      this.size--;
    }
  }
}

// Floyd's Cycle Detection (Tortoise & Hare)
function hasCycle(head) {
  let slow = head, fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) return true;
  }
  return false;
}

// Reverse Linked List
function reverseList(head) {
  let prev = null, curr = head;
  while (curr) {
    const next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  return prev;
}`
  },

  stacks: {
    id: 'stacks',
    name: 'Stacks',
    icon: 'Layers',
    color: 'purple',
    description: 'A LIFO (Last In, First Out) data structure where elements are added and removed from the same end.',
    complexity: {
      access: { time: 'O(n)', space: 'O(1)' },
      search: { time: 'O(n)', space: 'O(1)' },
      insertion: { time: 'O(1)', space: 'O(1)' },
      deletion: { time: 'O(1)', space: 'O(1)' }
    },
    spaceComplexity: 'O(n)',
    keyFeatures: [
      'LIFO principle - Last In, First Out',
      'Only top element is accessible',
      'Push and Pop operations in O(1)',
      'Can be implemented with arrays or linked lists'
    ],
    useCases: [
      'Function call stack (recursion)',
      'Undo/Redo operations',
      'Expression evaluation and parsing',
      'Backtracking algorithms'
    ],
    algorithms: [
      { name: 'Valid Parentheses', complexity: 'O(n)' },
      { name: 'Evaluate Postfix', complexity: 'O(n)' },
      { name: 'Next Greater Element', complexity: 'O(n)' },
      { name: 'Min Stack', complexity: 'O(1) for all ops' }
    ],
    funFacts: [
      'The call stack is why recursion works in programming',
      'Stack overflow errors occur when the call stack exceeds its limit',
      'Browsers use stacks to manage page navigation history'
    ],
    leetcodeProblems: [
      { id: 20, name: 'Valid Parentheses', difficulty: 'Easy', url: 'https://leetcode.com/problems/valid-parentheses/' },
      { id: 155, name: 'Min Stack', difficulty: 'Medium', url: 'https://leetcode.com/problems/min-stack/' },
      { id: 150, name: 'Evaluate Reverse Polish Notation', difficulty: 'Medium', url: 'https://leetcode.com/problems/evaluate-reverse-polish-notation/' },
      { id: 739, name: 'Daily Temperatures', difficulty: 'Medium', url: 'https://leetcode.com/problems/daily-temperatures/' },
      { id: 496, name: 'Next Greater Element I', difficulty: 'Easy', url: 'https://leetcode.com/problems/next-greater-element-i/' },
      { id: 394, name: 'Decode String', difficulty: 'Medium', url: 'https://leetcode.com/problems/decode-string/' },
      { id: 71, name: 'Simplify Path', difficulty: 'Medium', url: 'https://leetcode.com/problems/simplify-path/' },
      { id: 84, name: 'Largest Rectangle in Histogram', difficulty: 'Hard', url: 'https://leetcode.com/problems/largest-rectangle-in-histogram/' },
      { id: 735, name: 'Asteroid Collision', difficulty: 'Medium', url: 'https://leetcode.com/problems/asteroid-collision/' },
      { id: 224, name: 'Basic Calculator', difficulty: 'Hard', url: 'https://leetcode.com/problems/basic-calculator/' }
    ],
    codeExample: `// JavaScript Stack Implementation
class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    if (this.isEmpty()) return null;
    return this.items.pop();
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }
}

// Valid Parentheses Problem
function isValid(s) {
  const stack = [];
  const map = { ')': '(', '}': '{', ']': '[' };

  for (const char of s) {
    if (!map[char]) {
      stack.push(char);
    } else if (stack.pop() !== map[char]) {
      return false;
    }
  }
  return stack.length === 0;
}

// Min Stack - O(1) getMin
class MinStack {
  constructor() {
    this.stack = [];
    this.minStack = [];
  }

  push(val) {
    this.stack.push(val);
    const min = this.minStack.length === 0
      ? val
      : Math.min(val, this.minStack[this.minStack.length - 1]);
    this.minStack.push(min);
  }

  pop() {
    this.stack.pop();
    this.minStack.pop();
  }

  getMin() {
    return this.minStack[this.minStack.length - 1];
  }
}`
  },

  queues: {
    id: 'queues',
    name: 'Queues',
    icon: 'ArrowRightLeft',
    color: 'orange',
    description: 'A FIFO (First In, First Out) data structure where elements are added at rear and removed from front.',
    complexity: {
      access: { time: 'O(n)', space: 'O(1)' },
      search: { time: 'O(n)', space: 'O(1)' },
      insertion: { time: 'O(1)', space: 'O(1)' },
      deletion: { time: 'O(1)', space: 'O(1)' }
    },
    spaceComplexity: 'O(n)',
    keyFeatures: [
      'FIFO principle - First In, First Out',
      'Enqueue adds to rear, Dequeue removes from front',
      'Variants: Circular Queue, Priority Queue, Deque',
      'Essential for BFS traversal'
    ],
    useCases: [
      'Task scheduling (CPU, Print queue)',
      'Breadth-First Search (BFS)',
      'Message queues in distributed systems',
      'Buffering (streaming, keyboard input)'
    ],
    algorithms: [
      { name: 'BFS Traversal', complexity: 'O(V + E)' },
      { name: 'Level Order Traversal', complexity: 'O(n)' },
      { name: 'Sliding Window Maximum', complexity: 'O(n)' },
      { name: 'Implement Stack using Queues', complexity: 'O(n)' }
    ],
    funFacts: [
      'Message queues like RabbitMQ and Kafka process billions of messages daily',
      'The event loop in JavaScript uses a task queue',
      'Circular queues prevent memory waste from dequeue operations'
    ],
    leetcodeProblems: [
      { id: 232, name: 'Implement Queue using Stacks', difficulty: 'Easy', url: 'https://leetcode.com/problems/implement-queue-using-stacks/' },
      { id: 225, name: 'Implement Stack using Queues', difficulty: 'Easy', url: 'https://leetcode.com/problems/implement-stack-using-queues/' },
      { id: 622, name: 'Design Circular Queue', difficulty: 'Medium', url: 'https://leetcode.com/problems/design-circular-queue/' },
      { id: 933, name: 'Number of Recent Calls', difficulty: 'Easy', url: 'https://leetcode.com/problems/number-of-recent-calls/' },
      { id: 346, name: 'Moving Average from Data Stream', difficulty: 'Easy', url: 'https://leetcode.com/problems/moving-average-from-data-stream/' },
      { id: 239, name: 'Sliding Window Maximum', difficulty: 'Hard', url: 'https://leetcode.com/problems/sliding-window-maximum/' },
      { id: 641, name: 'Design Circular Deque', difficulty: 'Medium', url: 'https://leetcode.com/problems/design-circular-deque/' },
      { id: 862, name: 'Shortest Subarray with Sum at Least K', difficulty: 'Hard', url: 'https://leetcode.com/problems/shortest-subarray-with-sum-at-least-k/' },
      { id: 353, name: 'Design Snake Game', difficulty: 'Medium', url: 'https://leetcode.com/problems/design-snake-game/' },
      { id: 362, name: 'Design Hit Counter', difficulty: 'Medium', url: 'https://leetcode.com/problems/design-hit-counter/' }
    ],
    codeExample: `// JavaScript Queue Implementation
class Queue {
  constructor() {
    this.items = {};
    this.front = 0;
    this.rear = 0;
  }

  enqueue(element) {
    this.items[this.rear] = element;
    this.rear++;
  }

  dequeue() {
    if (this.isEmpty()) return null;
    const item = this.items[this.front];
    delete this.items[this.front];
    this.front++;
    return item;
  }

  peek() {
    return this.items[this.front];
  }

  isEmpty() {
    return this.rear - this.front === 0;
  }

  size() {
    return this.rear - this.front;
  }
}

// BFS Level Order Traversal
function levelOrder(root) {
  if (!root) return [];
  const result = [];
  const queue = [root];

  while (queue.length > 0) {
    const levelSize = queue.length;
    const level = [];

    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift();
      level.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    result.push(level);
  }
  return result;
}

// Priority Queue (using array - for interviews)
class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(val, priority) {
    this.values.push({ val, priority });
    this.values.sort((a, b) => a.priority - b.priority);
  }

  dequeue() {
    return this.values.shift();
  }
}`
  },

  trees: {
    id: 'trees',
    name: 'Trees',
    icon: 'GitBranch',
    color: 'emerald',
    description: 'A hierarchical data structure with a root node and child nodes forming a parent-child relationship.',
    complexity: {
      access: { time: 'O(log n)*', space: 'O(1)' },
      search: { time: 'O(log n)*', space: 'O(1)' },
      insertion: { time: 'O(log n)*', space: 'O(1)' },
      deletion: { time: 'O(log n)*', space: 'O(1)' }
    },
    spaceComplexity: 'O(n)',
    keyFeatures: [
      'Hierarchical structure with parent-child relationships',
      'BST: left < parent < right property',
      'Types: Binary, BST, AVL, Red-Black, B-Tree',
      '* Balanced trees guarantee O(log n) operations'
    ],
    useCases: [
      'File system hierarchy',
      'DOM (Document Object Model)',
      'Database indexing (B-Trees)',
      'Decision making and AI'
    ],
    algorithms: [
      { name: 'Inorder/Preorder/Postorder', complexity: 'O(n)' },
      { name: 'Level Order (BFS)', complexity: 'O(n)' },
      { name: 'Validate BST', complexity: 'O(n)' },
      { name: 'Lowest Common Ancestor', complexity: 'O(n)' }
    ],
    funFacts: [
      'The DOM you interact with on every webpage is a tree',
      'B-Trees are used in every major database system',
      'A tree with n nodes has exactly n-1 edges'
    ],
    leetcodeProblems: [
      { id: 104, name: 'Maximum Depth of Binary Tree', difficulty: 'Easy', url: 'https://leetcode.com/problems/maximum-depth-of-binary-tree/' },
      { id: 226, name: 'Invert Binary Tree', difficulty: 'Easy', url: 'https://leetcode.com/problems/invert-binary-tree/' },
      { id: 100, name: 'Same Tree', difficulty: 'Easy', url: 'https://leetcode.com/problems/same-tree/' },
      { id: 102, name: 'Binary Tree Level Order Traversal', difficulty: 'Medium', url: 'https://leetcode.com/problems/binary-tree-level-order-traversal/' },
      { id: 98, name: 'Validate Binary Search Tree', difficulty: 'Medium', url: 'https://leetcode.com/problems/validate-binary-search-tree/' },
      { id: 236, name: 'Lowest Common Ancestor of a Binary Tree', difficulty: 'Medium', url: 'https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/' },
      { id: 105, name: 'Construct Binary Tree from Preorder and Inorder', difficulty: 'Medium', url: 'https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/' },
      { id: 230, name: 'Kth Smallest Element in a BST', difficulty: 'Medium', url: 'https://leetcode.com/problems/kth-smallest-element-in-a-bst/' },
      { id: 124, name: 'Binary Tree Maximum Path Sum', difficulty: 'Hard', url: 'https://leetcode.com/problems/binary-tree-maximum-path-sum/' },
      { id: 297, name: 'Serialize and Deserialize Binary Tree', difficulty: 'Hard', url: 'https://leetcode.com/problems/serialize-and-deserialize-binary-tree/' }
    ],
    codeExample: `// JavaScript Binary Tree Implementation
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

// Tree Traversals
function inorder(root, result = []) {
  if (!root) return result;
  inorder(root.left, result);
  result.push(root.val);
  inorder(root.right, result);
  return result;
}

function preorder(root, result = []) {
  if (!root) return result;
  result.push(root.val);
  preorder(root.left, result);
  preorder(root.right, result);
  return result;
}

function postorder(root, result = []) {
  if (!root) return result;
  postorder(root.left, result);
  postorder(root.right, result);
  result.push(root.val);
  return result;
}

// Validate BST
function isValidBST(root, min = -Infinity, max = Infinity) {
  if (!root) return true;
  if (root.val <= min || root.val >= max) return false;
  return isValidBST(root.left, min, root.val) &&
         isValidBST(root.right, root.val, max);
}

// Lowest Common Ancestor
function lowestCommonAncestor(root, p, q) {
  if (!root || root === p || root === q) return root;
  const left = lowestCommonAncestor(root.left, p, q);
  const right = lowestCommonAncestor(root.right, p, q);
  if (left && right) return root;
  return left || right;
}

// Maximum Depth
function maxDepth(root) {
  if (!root) return 0;
  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
}`
  },

  heaps: {
    id: 'heaps',
    name: 'Heaps',
    icon: 'Triangle',
    color: 'yellow',
    description: 'A complete binary tree where parent nodes are greater (max-heap) or smaller (min-heap) than children.',
    complexity: {
      access: { time: 'O(1) for max/min', space: 'O(1)' },
      search: { time: 'O(n)', space: 'O(1)' },
      insertion: { time: 'O(log n)', space: 'O(1)' },
      deletion: { time: 'O(log n)', space: 'O(1)' }
    },
    spaceComplexity: 'O(n)',
    keyFeatures: [
      'Complete binary tree stored in array',
      'Parent at i, children at 2i+1 and 2i+2',
      'Max-Heap: parent ≥ children',
      'Min-Heap: parent ≤ children'
    ],
    useCases: [
      'Priority Queues',
      'Heap Sort algorithm',
      'Finding K largest/smallest elements',
      'Median maintenance in data streams'
    ],
    algorithms: [
      { name: 'Heapify', complexity: 'O(log n)' },
      { name: 'Build Heap', complexity: 'O(n)' },
      { name: 'Heap Sort', complexity: 'O(n log n)' },
      { name: 'K Closest Points', complexity: 'O(n log k)' }
    ],
    funFacts: [
      'Heaps are the backbone of priority queues in all major languages',
      'Building a heap is O(n), not O(n log n) due to mathematical proof',
      'JavaScript doesn\'t have a built-in heap - you must implement it!'
    ],
    leetcodeProblems: [
      { id: 215, name: 'Kth Largest Element in an Array', difficulty: 'Medium', url: 'https://leetcode.com/problems/kth-largest-element-in-an-array/' },
      { id: 347, name: 'Top K Frequent Elements', difficulty: 'Medium', url: 'https://leetcode.com/problems/top-k-frequent-elements/' },
      { id: 703, name: 'Kth Largest Element in a Stream', difficulty: 'Easy', url: 'https://leetcode.com/problems/kth-largest-element-in-a-stream/' },
      { id: 1046, name: 'Last Stone Weight', difficulty: 'Easy', url: 'https://leetcode.com/problems/last-stone-weight/' },
      { id: 973, name: 'K Closest Points to Origin', difficulty: 'Medium', url: 'https://leetcode.com/problems/k-closest-points-to-origin/' },
      { id: 295, name: 'Find Median from Data Stream', difficulty: 'Hard', url: 'https://leetcode.com/problems/find-median-from-data-stream/' },
      { id: 621, name: 'Task Scheduler', difficulty: 'Medium', url: 'https://leetcode.com/problems/task-scheduler/' },
      { id: 373, name: 'Find K Pairs with Smallest Sums', difficulty: 'Medium', url: 'https://leetcode.com/problems/find-k-pairs-with-smallest-sums/' },
      { id: 767, name: 'Reorganize String', difficulty: 'Medium', url: 'https://leetcode.com/problems/reorganize-string/' },
      { id: 23, name: 'Merge k Sorted Lists', difficulty: 'Hard', url: 'https://leetcode.com/problems/merge-k-sorted-lists/' }
    ],
    codeExample: `// JavaScript Min Heap Implementation
class MinHeap {
  constructor() {
    this.heap = [];
  }

  getParentIndex(i) { return Math.floor((i - 1) / 2); }
  getLeftChildIndex(i) { return 2 * i + 1; }
  getRightChildIndex(i) { return 2 * i + 2; }

  swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }

  insert(val) {
    this.heap.push(val);
    this.heapifyUp();
  }

  heapifyUp() {
    let index = this.heap.length - 1;
    while (index > 0) {
      const parentIndex = this.getParentIndex(index);
      if (this.heap[parentIndex] <= this.heap[index]) break;
      this.swap(parentIndex, index);
      index = parentIndex;
    }
  }

  extractMin() {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop();

    const min = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyDown();
    return min;
  }

  heapifyDown() {
    let index = 0;
    while (this.getLeftChildIndex(index) < this.heap.length) {
      let smallerChildIndex = this.getLeftChildIndex(index);
      const rightChildIndex = this.getRightChildIndex(index);

      if (rightChildIndex < this.heap.length &&
          this.heap[rightChildIndex] < this.heap[smallerChildIndex]) {
        smallerChildIndex = rightChildIndex;
      }

      if (this.heap[index] <= this.heap[smallerChildIndex]) break;
      this.swap(index, smallerChildIndex);
      index = smallerChildIndex;
    }
  }

  peek() {
    return this.heap[0];
  }
}

// Find K Largest Elements
function findKLargest(nums, k) {
  const minHeap = new MinHeap();
  for (const num of nums) {
    minHeap.insert(num);
    if (minHeap.heap.length > k) {
      minHeap.extractMin();
    }
  }
  return minHeap.heap;
}`
  },

  hashTables: {
    id: 'hash-tables',
    name: 'Hash Tables',
    icon: 'Hash',
    color: 'pink',
    description: 'A data structure that maps keys to values using a hash function for near-constant time operations.',
    complexity: {
      access: { time: 'N/A', space: 'N/A' },
      search: { time: 'O(1)*', space: 'O(1)' },
      insertion: { time: 'O(1)*', space: 'O(1)' },
      deletion: { time: 'O(1)*', space: 'O(1)' }
    },
    spaceComplexity: 'O(n)',
    keyFeatures: [
      '* Average case O(1), worst case O(n) with collisions',
      'Uses hash function to compute index',
      'Collision handling: Chaining or Open Addressing',
      'Load factor affects performance'
    ],
    useCases: [
      'Database indexing',
      'Caching (LRU Cache)',
      'Counting frequencies',
      'Detecting duplicates'
    ],
    algorithms: [
      { name: 'Two Sum', complexity: 'O(n)' },
      { name: 'Group Anagrams', complexity: 'O(n * k)' },
      { name: 'LRU Cache', complexity: 'O(1)' },
      { name: 'Subarray Sum Equals K', complexity: 'O(n)' }
    ],
    funFacts: [
      'Python dictionaries and JavaScript objects are hash tables',
      'A good hash function distributes keys uniformly',
      'Cryptographic hash functions are designed to be one-way'
    ],
    leetcodeProblems: [
      { id: 1, name: 'Two Sum', difficulty: 'Easy', url: 'https://leetcode.com/problems/two-sum/' },
      { id: 49, name: 'Group Anagrams', difficulty: 'Medium', url: 'https://leetcode.com/problems/group-anagrams/' },
      { id: 242, name: 'Valid Anagram', difficulty: 'Easy', url: 'https://leetcode.com/problems/valid-anagram/' },
      { id: 146, name: 'LRU Cache', difficulty: 'Medium', url: 'https://leetcode.com/problems/lru-cache/' },
      { id: 560, name: 'Subarray Sum Equals K', difficulty: 'Medium', url: 'https://leetcode.com/problems/subarray-sum-equals-k/' },
      { id: 380, name: 'Insert Delete GetRandom O(1)', difficulty: 'Medium', url: 'https://leetcode.com/problems/insert-delete-getrandom-o1/' },
      { id: 128, name: 'Longest Consecutive Sequence', difficulty: 'Medium', url: 'https://leetcode.com/problems/longest-consecutive-sequence/' },
      { id: 76, name: 'Minimum Window Substring', difficulty: 'Hard', url: 'https://leetcode.com/problems/minimum-window-substring/' },
      { id: 3, name: 'Longest Substring Without Repeating Characters', difficulty: 'Medium', url: 'https://leetcode.com/problems/longest-substring-without-repeating-characters/' },
      { id: 438, name: 'Find All Anagrams in a String', difficulty: 'Medium', url: 'https://leetcode.com/problems/find-all-anagrams-in-a-string/' }
    ],
    codeExample: `// JavaScript Hash Table Implementation
class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    const PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      const char = key[i];
      const value = char.charCodeAt(0) - 96;
      total = (total * PRIME + value) % this.keyMap.length;
    }
    return total;
  }

  set(key, value) {
    const index = this._hash(key);
    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }
    // Update if key exists
    for (let pair of this.keyMap[index]) {
      if (pair[0] === key) {
        pair[1] = value;
        return;
      }
    }
    this.keyMap[index].push([key, value]);
  }

  get(key) {
    const index = this._hash(key);
    if (this.keyMap[index]) {
      for (let pair of this.keyMap[index]) {
        if (pair[0] === key) return pair[1];
      }
    }
    return undefined;
  }
}

// Two Sum using Hash Map
function twoSum(nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    map.set(nums[i], i);
  }
  return [];
}

// Group Anagrams
function groupAnagrams(strs) {
  const map = new Map();
  for (const str of strs) {
    const sorted = str.split('').sort().join('');
    if (!map.has(sorted)) map.set(sorted, []);
    map.get(sorted).push(str);
  }
  return Array.from(map.values());
}`
  },

  graphs: {
    id: 'graphs',
    name: 'Graphs',
    icon: 'Network',
    color: 'cyan',
    description: 'A non-linear data structure consisting of vertices (nodes) connected by edges.',
    complexity: {
      access: { time: 'O(V + E)', space: 'O(1)' },
      search: { time: 'O(V + E)', space: 'O(V)' },
      insertion: { time: 'O(1)', space: 'O(1)' },
      deletion: { time: 'O(E)', space: 'O(1)' }
    },
    spaceComplexity: 'O(V + E) adjacency list, O(V²) matrix',
    keyFeatures: [
      'Vertices (nodes) and Edges (connections)',
      'Directed vs Undirected',
      'Weighted vs Unweighted',
      'Representations: Adjacency List or Matrix'
    ],
    useCases: [
      'Social networks (friends, followers)',
      'Maps and navigation (GPS)',
      'Recommendation systems',
      'Network routing'
    ],
    algorithms: [
      { name: 'BFS (Breadth-First Search)', complexity: 'O(V + E)' },
      { name: 'DFS (Depth-First Search)', complexity: 'O(V + E)' },
      { name: 'Dijkstra\'s Shortest Path', complexity: 'O((V + E) log V)' },
      { name: 'Topological Sort', complexity: 'O(V + E)' }
    ],
    funFacts: [
      'Facebook\'s social graph has billions of nodes and trillions of edges',
      'PageRank (Google\'s algorithm) treats the web as a graph',
      'The "Six Degrees of Separation" is a graph theory concept'
    ],
    leetcodeProblems: [
      { id: 200, name: 'Number of Islands', difficulty: 'Medium', url: 'https://leetcode.com/problems/number-of-islands/' },
      { id: 133, name: 'Clone Graph', difficulty: 'Medium', url: 'https://leetcode.com/problems/clone-graph/' },
      { id: 207, name: 'Course Schedule', difficulty: 'Medium', url: 'https://leetcode.com/problems/course-schedule/' },
      { id: 417, name: 'Pacific Atlantic Water Flow', difficulty: 'Medium', url: 'https://leetcode.com/problems/pacific-atlantic-water-flow/' },
      { id: 210, name: 'Course Schedule II', difficulty: 'Medium', url: 'https://leetcode.com/problems/course-schedule-ii/' },
      { id: 743, name: 'Network Delay Time', difficulty: 'Medium', url: 'https://leetcode.com/problems/network-delay-time/' },
      { id: 684, name: 'Redundant Connection', difficulty: 'Medium', url: 'https://leetcode.com/problems/redundant-connection/' },
      { id: 127, name: 'Word Ladder', difficulty: 'Hard', url: 'https://leetcode.com/problems/word-ladder/' },
      { id: 269, name: 'Alien Dictionary', difficulty: 'Hard', url: 'https://leetcode.com/problems/alien-dictionary/' },
      { id: 787, name: 'Cheapest Flights Within K Stops', difficulty: 'Medium', url: 'https://leetcode.com/problems/cheapest-flights-within-k-stops/' }
    ],
    codeExample: `// JavaScript Graph Implementation (Adjacency List)
class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  addEdge(v1, v2) {
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1); // Remove for directed
  }

  // BFS - uses Queue
  bfs(start) {
    const queue = [start];
    const result = [];
    const visited = { [start]: true };

    while (queue.length) {
      const vertex = queue.shift();
      result.push(vertex);

      for (const neighbor of this.adjacencyList[vertex]) {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      }
    }
    return result;
  }

  // DFS - uses Stack (or recursion)
  dfs(start) {
    const stack = [start];
    const result = [];
    const visited = { [start]: true };

    while (stack.length) {
      const vertex = stack.pop();
      result.push(vertex);

      for (const neighbor of this.adjacencyList[vertex]) {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          stack.push(neighbor);
        }
      }
    }
    return result;
  }
}

// Topological Sort (for DAGs)
function topologicalSort(numCourses, prerequisites) {
  const graph = new Map();
  const inDegree = new Array(numCourses).fill(0);

  for (let i = 0; i < numCourses; i++) graph.set(i, []);
  for (const [course, prereq] of prerequisites) {
    graph.get(prereq).push(course);
    inDegree[course]++;
  }

  const queue = [];
  for (let i = 0; i < numCourses; i++) {
    if (inDegree[i] === 0) queue.push(i);
  }

  const result = [];
  while (queue.length) {
    const course = queue.shift();
    result.push(course);
    for (const next of graph.get(course)) {
      inDegree[next]--;
      if (inDegree[next] === 0) queue.push(next);
    }
  }

  return result.length === numCourses ? result : [];
}`
  },

  tries: {
    id: 'tries',
    name: 'Tries',
    icon: 'FileText',
    color: 'indigo',
    description: 'A tree-like data structure for efficient retrieval of keys, commonly used for strings.',
    complexity: {
      access: { time: 'O(m)', space: 'O(1)' },
      search: { time: 'O(m)', space: 'O(1)' },
      insertion: { time: 'O(m)', space: 'O(m)' },
      deletion: { time: 'O(m)', space: 'O(1)' }
    },
    spaceComplexity: 'O(n * m) where m is average key length',
    keyFeatures: [
      'm = length of the key/word',
      'Each node represents a character',
      'Root is empty, paths form words',
      'Prefix-based searching is very efficient'
    ],
    useCases: [
      'Autocomplete systems',
      'Spell checkers',
      'IP routing (Longest prefix match)',
      'Word games (Scrabble, Boggle)'
    ],
    algorithms: [
      { name: 'Insert Word', complexity: 'O(m)' },
      { name: 'Search Word', complexity: 'O(m)' },
      { name: 'Prefix Search', complexity: 'O(m)' },
      { name: 'Word Search II', complexity: 'O(n * m * 4^m)' }
    ],
    funFacts: [
      'The name "Trie" comes from reTRIEval',
      'Google\'s search autocomplete uses trie-like structures',
      'Tries can be compressed using techniques like Patricia tries'
    ],
    leetcodeProblems: [
      { id: 208, name: 'Implement Trie (Prefix Tree)', difficulty: 'Medium', url: 'https://leetcode.com/problems/implement-trie-prefix-tree/' },
      { id: 211, name: 'Design Add and Search Words Data Structure', difficulty: 'Medium', url: 'https://leetcode.com/problems/design-add-and-search-words-data-structure/' },
      { id: 212, name: 'Word Search II', difficulty: 'Hard', url: 'https://leetcode.com/problems/word-search-ii/' },
      { id: 14, name: 'Longest Common Prefix', difficulty: 'Easy', url: 'https://leetcode.com/problems/longest-common-prefix/' },
      { id: 648, name: 'Replace Words', difficulty: 'Medium', url: 'https://leetcode.com/problems/replace-words/' },
      { id: 677, name: 'Map Sum Pairs', difficulty: 'Medium', url: 'https://leetcode.com/problems/map-sum-pairs/' },
      { id: 720, name: 'Longest Word in Dictionary', difficulty: 'Medium', url: 'https://leetcode.com/problems/longest-word-in-dictionary/' },
      { id: 1268, name: 'Search Suggestions System', difficulty: 'Medium', url: 'https://leetcode.com/problems/search-suggestions-system/' },
      { id: 421, name: 'Maximum XOR of Two Numbers in an Array', difficulty: 'Medium', url: 'https://leetcode.com/problems/maximum-xor-of-two-numbers-in-an-array/' },
      { id: 472, name: 'Concatenated Words', difficulty: 'Hard', url: 'https://leetcode.com/problems/concatenated-words/' }
    ],
    codeExample: `// JavaScript Trie Implementation
class TrieNode {
  constructor() {
    this.children = {};
    this.isEndOfWord = false;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  insert(word) {
    let node = this.root;
    for (const char of word) {
      if (!node.children[char]) {
        node.children[char] = new TrieNode();
      }
      node = node.children[char];
    }
    node.isEndOfWord = true;
  }

  search(word) {
    let node = this.root;
    for (const char of word) {
      if (!node.children[char]) return false;
      node = node.children[char];
    }
    return node.isEndOfWord;
  }

  startsWith(prefix) {
    let node = this.root;
    for (const char of prefix) {
      if (!node.children[char]) return false;
      node = node.children[char];
    }
    return true;
  }

  // Get all words with given prefix
  getWordsWithPrefix(prefix) {
    const result = [];
    let node = this.root;

    for (const char of prefix) {
      if (!node.children[char]) return result;
      node = node.children[char];
    }

    this._collectWords(node, prefix, result);
    return result;
  }

  _collectWords(node, prefix, result) {
    if (node.isEndOfWord) result.push(prefix);
    for (const char in node.children) {
      this._collectWords(node.children[char], prefix + char, result);
    }
  }
}

// Usage
const trie = new Trie();
trie.insert("apple");
trie.insert("app");
trie.insert("application");
console.log(trie.search("app")); // true
console.log(trie.startsWith("app")); // true
console.log(trie.getWordsWithPrefix("app"));
// ["app", "apple", "application"]`
  }
};

export const dataStructuresList = Object.values(dataStructures);
