export const algorithmCategories = {
  sorting: {
    id: 'sorting',
    name: 'Sorting Algorithms',
    icon: 'ArrowUpDown',
    description: 'Algorithms that arrange elements in a specific order',
    algorithms: [
      {
        name: 'Bubble Sort',
        timeComplexity: { best: 'O(n)', average: 'O(n²)', worst: 'O(n²)' },
        spaceComplexity: 'O(1)',
        stable: true,
        description: 'Repeatedly swaps adjacent elements if they are in wrong order',
        useCase: 'Educational purposes, nearly sorted data',
        code: `function bubbleSort(arr) {
  const n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let swapped = false;
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swapped = true;
      }
    }
    if (!swapped) break; // Optimization
  }
  return arr;
}`
      },
      {
        name: 'Selection Sort',
        timeComplexity: { best: 'O(n²)', average: 'O(n²)', worst: 'O(n²)' },
        spaceComplexity: 'O(1)',
        stable: false,
        description: 'Finds minimum element and places it at the beginning',
        useCase: 'Small datasets, memory-constrained systems',
        code: `function selectionSort(arr) {
  const n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let minIdx = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIdx]) {
        minIdx = j;
      }
    }
    [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
  }
  return arr;
}`
      },
      {
        name: 'Insertion Sort',
        timeComplexity: { best: 'O(n)', average: 'O(n²)', worst: 'O(n²)' },
        spaceComplexity: 'O(1)',
        stable: true,
        description: 'Builds sorted array one element at a time',
        useCase: 'Small datasets, nearly sorted arrays, online sorting',
        code: `function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    const key = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }
  return arr;
}`
      },
      {
        name: 'Merge Sort',
        timeComplexity: { best: 'O(n log n)', average: 'O(n log n)', worst: 'O(n log n)' },
        spaceComplexity: 'O(n)',
        stable: true,
        description: 'Divide and conquer - splits, sorts, and merges',
        useCase: 'Large datasets, stable sort needed, linked lists',
        code: `function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

function merge(left, right) {
  const result = [];
  let l = 0, r = 0;

  while (l < left.length && r < right.length) {
    if (left[l] <= right[r]) {
      result.push(left[l++]);
    } else {
      result.push(right[r++]);
    }
  }

  return result.concat(left.slice(l)).concat(right.slice(r));
}`
      },
      {
        name: 'Quick Sort',
        timeComplexity: { best: 'O(n log n)', average: 'O(n log n)', worst: 'O(n²)' },
        spaceComplexity: 'O(log n)',
        stable: false,
        description: 'Divide and conquer using pivot partitioning',
        useCase: 'General purpose, in-place sorting, cache efficient',
        code: `function quickSort(arr, low = 0, high = arr.length - 1) {
  if (low < high) {
    const pivotIdx = partition(arr, low, high);
    quickSort(arr, low, pivotIdx - 1);
    quickSort(arr, pivotIdx + 1, high);
  }
  return arr;
}

function partition(arr, low, high) {
  const pivot = arr[high];
  let i = low - 1;

  for (let j = low; j < high; j++) {
    if (arr[j] < pivot) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
  [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
  return i + 1;
}`
      },
      {
        name: 'Heap Sort',
        timeComplexity: { best: 'O(n log n)', average: 'O(n log n)', worst: 'O(n log n)' },
        spaceComplexity: 'O(1)',
        stable: false,
        description: 'Uses heap data structure to sort elements',
        useCase: 'When O(n log n) worst-case is needed with O(1) space',
        code: `function heapSort(arr) {
  const n = arr.length;

  // Build max heap
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(arr, n, i);
  }

  // Extract elements from heap
  for (let i = n - 1; i > 0; i--) {
    [arr[0], arr[i]] = [arr[i], arr[0]];
    heapify(arr, i, 0);
  }
  return arr;
}

function heapify(arr, n, i) {
  let largest = i;
  const left = 2 * i + 1;
  const right = 2 * i + 2;

  if (left < n && arr[left] > arr[largest]) largest = left;
  if (right < n && arr[right] > arr[largest]) largest = right;

  if (largest !== i) {
    [arr[i], arr[largest]] = [arr[largest], arr[i]];
    heapify(arr, n, largest);
  }
}`
      }
    ]
  },

  searching: {
    id: 'searching',
    name: 'Searching Algorithms',
    icon: 'Search',
    description: 'Algorithms to find elements in data structures',
    algorithms: [
      {
        name: 'Linear Search',
        timeComplexity: { best: 'O(1)', average: 'O(n)', worst: 'O(n)' },
        spaceComplexity: 'O(1)',
        description: 'Sequentially checks each element',
        useCase: 'Unsorted data, small datasets',
        code: `function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return i;
  }
  return -1;
}`
      },
      {
        name: 'Binary Search',
        timeComplexity: { best: 'O(1)', average: 'O(log n)', worst: 'O(log n)' },
        spaceComplexity: 'O(1)',
        description: 'Divides sorted array in half repeatedly',
        useCase: 'Sorted arrays, efficient searching',
        code: `function binarySearch(arr, target) {
  let left = 0, right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return -1;
}

// Find first occurrence
function findFirst(arr, target) {
  let left = 0, right = arr.length - 1, result = -1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
      result = mid;
      right = mid - 1; // Keep searching left
    } else if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return result;
}`
      },
      {
        name: 'Binary Search on Answer',
        timeComplexity: { best: 'O(log n)', average: 'O(log n)', worst: 'O(log n)' },
        spaceComplexity: 'O(1)',
        description: 'Binary search on a range of possible answers',
        useCase: 'Optimization problems, finding min/max valid value',
        code: `// Example: Minimum capacity to ship packages in D days
function shipWithinDays(weights, days) {
  let left = Math.max(...weights);
  let right = weights.reduce((a, b) => a + b, 0);

  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (canShip(weights, days, mid)) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return left;
}

function canShip(weights, days, capacity) {
  let daysNeeded = 1, currentLoad = 0;
  for (const weight of weights) {
    if (currentLoad + weight > capacity) {
      daysNeeded++;
      currentLoad = 0;
    }
    currentLoad += weight;
  }
  return daysNeeded <= days;
}`
      }
    ]
  },

  dynamicProgramming: {
    id: 'dynamic-programming',
    name: 'Dynamic Programming',
    icon: 'Grid3x3',
    description: 'Solving complex problems by breaking them into overlapping subproblems',
    algorithms: [
      {
        name: 'Fibonacci (Memoization)',
        timeComplexity: { best: 'O(n)', average: 'O(n)', worst: 'O(n)' },
        spaceComplexity: 'O(n)',
        description: 'Top-down approach with memoization',
        useCase: 'Problems with overlapping subproblems',
        code: `// Top-down (Memoization)
function fib(n, memo = {}) {
  if (n in memo) return memo[n];
  if (n <= 1) return n;
  memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
  return memo[n];
}

// Bottom-up (Tabulation)
function fibTab(n) {
  if (n <= 1) return n;
  const dp = [0, 1];
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
}

// Space Optimized
function fibOptimized(n) {
  if (n <= 1) return n;
  let prev2 = 0, prev1 = 1;
  for (let i = 2; i <= n; i++) {
    const curr = prev1 + prev2;
    prev2 = prev1;
    prev1 = curr;
  }
  return prev1;
}`
      },
      {
        name: 'Longest Common Subsequence',
        timeComplexity: { best: 'O(m*n)', average: 'O(m*n)', worst: 'O(m*n)' },
        spaceComplexity: 'O(m*n)',
        description: 'Find longest subsequence common to both sequences',
        useCase: 'Diff tools, DNA sequence analysis',
        code: `function longestCommonSubsequence(text1, text2) {
  const m = text1.length, n = text2.length;
  const dp = Array(m + 1).fill().map(() => Array(n + 1).fill(0));

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (text1[i - 1] === text2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }
  return dp[m][n];
}`
      },
      {
        name: '0/1 Knapsack',
        timeComplexity: { best: 'O(n*W)', average: 'O(n*W)', worst: 'O(n*W)' },
        spaceComplexity: 'O(n*W)',
        description: 'Maximize value within weight capacity',
        useCase: 'Resource allocation, budget optimization',
        code: `function knapsack(weights, values, capacity) {
  const n = weights.length;
  const dp = Array(n + 1).fill().map(() =>
    Array(capacity + 1).fill(0)
  );

  for (let i = 1; i <= n; i++) {
    for (let w = 1; w <= capacity; w++) {
      if (weights[i - 1] <= w) {
        dp[i][w] = Math.max(
          dp[i - 1][w],
          values[i - 1] + dp[i - 1][w - weights[i - 1]]
        );
      } else {
        dp[i][w] = dp[i - 1][w];
      }
    }
  }
  return dp[n][capacity];
}

// Space Optimized - O(W)
function knapsackOptimized(weights, values, capacity) {
  const dp = Array(capacity + 1).fill(0);

  for (let i = 0; i < weights.length; i++) {
    for (let w = capacity; w >= weights[i]; w--) {
      dp[w] = Math.max(dp[w], values[i] + dp[w - weights[i]]);
    }
  }
  return dp[capacity];
}`
      },
      {
        name: 'Coin Change',
        timeComplexity: { best: 'O(n*amount)', average: 'O(n*amount)', worst: 'O(n*amount)' },
        spaceComplexity: 'O(amount)',
        description: 'Minimum coins to make amount',
        useCase: 'Currency systems, making change',
        code: `function coinChange(coins, amount) {
  const dp = Array(amount + 1).fill(Infinity);
  dp[0] = 0;

  for (let i = 1; i <= amount; i++) {
    for (const coin of coins) {
      if (coin <= i) {
        dp[i] = Math.min(dp[i], dp[i - coin] + 1);
      }
    }
  }

  return dp[amount] === Infinity ? -1 : dp[amount];
}

// Number of ways to make change
function coinChangeWays(coins, amount) {
  const dp = Array(amount + 1).fill(0);
  dp[0] = 1;

  for (const coin of coins) {
    for (let i = coin; i <= amount; i++) {
      dp[i] += dp[i - coin];
    }
  }

  return dp[amount];
}`
      },
      {
        name: 'Longest Increasing Subsequence',
        timeComplexity: { best: 'O(n log n)', average: 'O(n log n)', worst: 'O(n log n)' },
        spaceComplexity: 'O(n)',
        description: 'Find longest strictly increasing subsequence',
        useCase: 'Sequence analysis, patience sorting',
        code: `// O(n²) Solution
function lisNaive(nums) {
  const n = nums.length;
  const dp = Array(n).fill(1);

  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }
  return Math.max(...dp);
}

// O(n log n) Solution with Binary Search
function lis(nums) {
  const tails = [];

  for (const num of nums) {
    let left = 0, right = tails.length;
    while (left < right) {
      const mid = Math.floor((left + right) / 2);
      if (tails[mid] < num) left = mid + 1;
      else right = mid;
    }
    tails[left] = num;
  }

  return tails.length;
}`
      }
    ]
  },

  graphAlgorithms: {
    id: 'graph-algorithms',
    name: 'Graph Algorithms',
    icon: 'Share2',
    description: 'Algorithms for traversing and analyzing graphs',
    algorithms: [
      {
        name: "Dijkstra's Algorithm",
        timeComplexity: { best: 'O((V+E) log V)', average: 'O((V+E) log V)', worst: 'O((V+E) log V)' },
        spaceComplexity: 'O(V)',
        description: 'Shortest path from source to all vertices (non-negative weights)',
        useCase: 'GPS navigation, network routing',
        code: `function dijkstra(graph, start) {
  const distances = {};
  const visited = new Set();
  const pq = [[0, start]]; // [distance, node]

  for (const node in graph) {
    distances[node] = Infinity;
  }
  distances[start] = 0;

  while (pq.length) {
    pq.sort((a, b) => a[0] - b[0]);
    const [dist, node] = pq.shift();

    if (visited.has(node)) continue;
    visited.add(node);

    for (const [neighbor, weight] of graph[node]) {
      const newDist = dist + weight;
      if (newDist < distances[neighbor]) {
        distances[neighbor] = newDist;
        pq.push([newDist, neighbor]);
      }
    }
  }
  return distances;
}`
      },
      {
        name: 'Bellman-Ford',
        timeComplexity: { best: 'O(V*E)', average: 'O(V*E)', worst: 'O(V*E)' },
        spaceComplexity: 'O(V)',
        description: 'Shortest path with negative weights, detects negative cycles',
        useCase: 'Currency exchange, networks with negative weights',
        code: `function bellmanFord(edges, V, start) {
  const dist = Array(V).fill(Infinity);
  dist[start] = 0;

  // Relax all edges V-1 times
  for (let i = 0; i < V - 1; i++) {
    for (const [u, v, w] of edges) {
      if (dist[u] !== Infinity && dist[u] + w < dist[v]) {
        dist[v] = dist[u] + w;
      }
    }
  }

  // Check for negative cycles
  for (const [u, v, w] of edges) {
    if (dist[u] !== Infinity && dist[u] + w < dist[v]) {
      return null; // Negative cycle detected
    }
  }

  return dist;
}`
      },
      {
        name: 'Union-Find (Disjoint Set)',
        timeComplexity: { best: 'O(α(n))', average: 'O(α(n))', worst: 'O(α(n))' },
        spaceComplexity: 'O(n)',
        description: 'Track connected components with near-constant operations',
        useCase: "Kruskal's MST, cycle detection, connected components",
        code: `class UnionFind {
  constructor(n) {
    this.parent = Array.from({ length: n }, (_, i) => i);
    this.rank = Array(n).fill(0);
  }

  find(x) {
    if (this.parent[x] !== x) {
      this.parent[x] = this.find(this.parent[x]); // Path compression
    }
    return this.parent[x];
  }

  union(x, y) {
    const rootX = this.find(x);
    const rootY = this.find(y);

    if (rootX === rootY) return false;

    // Union by rank
    if (this.rank[rootX] < this.rank[rootY]) {
      this.parent[rootX] = rootY;
    } else if (this.rank[rootX] > this.rank[rootY]) {
      this.parent[rootY] = rootX;
    } else {
      this.parent[rootY] = rootX;
      this.rank[rootX]++;
    }
    return true;
  }

  connected(x, y) {
    return this.find(x) === this.find(y);
  }
}`
      },
      {
        name: "Kruskal's MST",
        timeComplexity: { best: 'O(E log E)', average: 'O(E log E)', worst: 'O(E log E)' },
        spaceComplexity: 'O(V)',
        description: 'Minimum Spanning Tree using Union-Find',
        useCase: 'Network design, clustering',
        code: `function kruskal(n, edges) {
  edges.sort((a, b) => a[2] - b[2]); // Sort by weight
  const uf = new UnionFind(n);
  const mst = [];
  let cost = 0;

  for (const [u, v, w] of edges) {
    if (uf.union(u, v)) {
      mst.push([u, v, w]);
      cost += w;
      if (mst.length === n - 1) break;
    }
  }

  return { mst, cost };
}`
      }
    ]
  },

  backtracking: {
    id: 'backtracking',
    name: 'Backtracking',
    icon: 'Undo2',
    description: 'Systematically search for solutions by trying and undoing choices',
    algorithms: [
      {
        name: 'Subsets',
        timeComplexity: { best: 'O(2^n)', average: 'O(2^n)', worst: 'O(2^n)' },
        spaceComplexity: 'O(n)',
        description: 'Generate all possible subsets',
        useCase: 'Combinatorial problems, power set',
        code: `function subsets(nums) {
  const result = [];

  function backtrack(start, current) {
    result.push([...current]);

    for (let i = start; i < nums.length; i++) {
      current.push(nums[i]);
      backtrack(i + 1, current);
      current.pop();
    }
  }

  backtrack(0, []);
  return result;
}`
      },
      {
        name: 'Permutations',
        timeComplexity: { best: 'O(n!)', average: 'O(n!)', worst: 'O(n!)' },
        spaceComplexity: 'O(n)',
        description: 'Generate all possible permutations',
        useCase: 'Arrangement problems, anagrams',
        code: `function permute(nums) {
  const result = [];

  function backtrack(current, remaining) {
    if (remaining.length === 0) {
      result.push([...current]);
      return;
    }

    for (let i = 0; i < remaining.length; i++) {
      current.push(remaining[i]);
      backtrack(
        current,
        [...remaining.slice(0, i), ...remaining.slice(i + 1)]
      );
      current.pop();
    }
  }

  backtrack([], nums);
  return result;
}`
      },
      {
        name: 'N-Queens',
        timeComplexity: { best: 'O(n!)', average: 'O(n!)', worst: 'O(n!)' },
        spaceComplexity: 'O(n)',
        description: 'Place N queens on NxN board without attacking each other',
        useCase: 'Constraint satisfaction, puzzle solving',
        code: `function solveNQueens(n) {
  const result = [];
  const board = Array(n).fill().map(() => Array(n).fill('.'));

  function isValid(row, col) {
    // Check column
    for (let i = 0; i < row; i++) {
      if (board[i][col] === 'Q') return false;
    }
    // Check diagonals
    for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
      if (board[i][j] === 'Q') return false;
    }
    for (let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
      if (board[i][j] === 'Q') return false;
    }
    return true;
  }

  function backtrack(row) {
    if (row === n) {
      result.push(board.map(r => r.join('')));
      return;
    }

    for (let col = 0; col < n; col++) {
      if (isValid(row, col)) {
        board[row][col] = 'Q';
        backtrack(row + 1);
        board[row][col] = '.';
      }
    }
  }

  backtrack(0);
  return result;
}`
      }
    ]
  }
};

export const interviewMustKnow = [
  {
    category: 'Arrays & Strings',
    problems: [
      { name: 'Two Sum', difficulty: 'Easy', pattern: 'Hash Map' },
      { name: 'Best Time to Buy and Sell Stock', difficulty: 'Easy', pattern: "Kadane's" },
      { name: 'Contains Duplicate', difficulty: 'Easy', pattern: 'Hash Set' },
      { name: 'Product of Array Except Self', difficulty: 'Medium', pattern: 'Prefix/Suffix' },
      { name: 'Maximum Subarray', difficulty: 'Medium', pattern: "Kadane's Algorithm" },
      { name: 'Three Sum', difficulty: 'Medium', pattern: 'Two Pointers' },
      { name: 'Container With Most Water', difficulty: 'Medium', pattern: 'Two Pointers' },
      { name: 'Longest Substring Without Repeating', difficulty: 'Medium', pattern: 'Sliding Window' },
      { name: 'Minimum Window Substring', difficulty: 'Hard', pattern: 'Sliding Window' },
      { name: 'Trapping Rain Water', difficulty: 'Hard', pattern: 'Two Pointers/Stack' }
    ]
  },
  {
    category: 'Linked Lists',
    problems: [
      { name: 'Reverse Linked List', difficulty: 'Easy', pattern: 'Iteration/Recursion' },
      { name: 'Merge Two Sorted Lists', difficulty: 'Easy', pattern: 'Two Pointers' },
      { name: 'Linked List Cycle', difficulty: 'Easy', pattern: 'Fast & Slow Pointers' },
      { name: 'Remove Nth Node From End', difficulty: 'Medium', pattern: 'Two Pointers' },
      { name: 'Reorder List', difficulty: 'Medium', pattern: 'Multiple Techniques' },
      { name: 'Merge K Sorted Lists', difficulty: 'Hard', pattern: 'Divide & Conquer/Heap' }
    ]
  },
  {
    category: 'Trees',
    problems: [
      { name: 'Invert Binary Tree', difficulty: 'Easy', pattern: 'DFS/BFS' },
      { name: 'Maximum Depth of Binary Tree', difficulty: 'Easy', pattern: 'DFS' },
      { name: 'Same Tree', difficulty: 'Easy', pattern: 'DFS' },
      { name: 'Validate Binary Search Tree', difficulty: 'Medium', pattern: 'DFS with bounds' },
      { name: 'Binary Tree Level Order Traversal', difficulty: 'Medium', pattern: 'BFS' },
      { name: 'Lowest Common Ancestor', difficulty: 'Medium', pattern: 'DFS' },
      { name: 'Binary Tree Maximum Path Sum', difficulty: 'Hard', pattern: 'DFS' },
      { name: 'Serialize and Deserialize Binary Tree', difficulty: 'Hard', pattern: 'BFS/DFS' }
    ]
  },
  {
    category: 'Graphs',
    problems: [
      { name: 'Number of Islands', difficulty: 'Medium', pattern: 'DFS/BFS' },
      { name: 'Clone Graph', difficulty: 'Medium', pattern: 'DFS with Hash Map' },
      { name: 'Course Schedule', difficulty: 'Medium', pattern: 'Topological Sort' },
      { name: 'Pacific Atlantic Water Flow', difficulty: 'Medium', pattern: 'Multi-source DFS' },
      { name: "Dijkstra's Shortest Path", difficulty: 'Medium', pattern: 'Priority Queue' },
      { name: 'Alien Dictionary', difficulty: 'Hard', pattern: 'Topological Sort' },
      { name: 'Word Ladder', difficulty: 'Hard', pattern: 'BFS' }
    ]
  },
  {
    category: 'Dynamic Programming',
    problems: [
      { name: 'Climbing Stairs', difficulty: 'Easy', pattern: 'Fibonacci-like' },
      { name: 'House Robber', difficulty: 'Medium', pattern: 'Linear DP' },
      { name: 'Coin Change', difficulty: 'Medium', pattern: 'Unbounded Knapsack' },
      { name: 'Longest Increasing Subsequence', difficulty: 'Medium', pattern: 'Binary Search DP' },
      { name: 'Unique Paths', difficulty: 'Medium', pattern: '2D DP' },
      { name: 'Word Break', difficulty: 'Medium', pattern: '1D DP' },
      { name: 'Longest Common Subsequence', difficulty: 'Medium', pattern: '2D DP' },
      { name: 'Edit Distance', difficulty: 'Hard', pattern: '2D DP' },
      { name: 'Burst Balloons', difficulty: 'Hard', pattern: 'Interval DP' }
    ]
  },
  {
    category: 'Heap & Priority Queue',
    problems: [
      { name: 'Kth Largest Element', difficulty: 'Medium', pattern: 'Min Heap' },
      { name: 'Top K Frequent Elements', difficulty: 'Medium', pattern: 'Heap/Bucket Sort' },
      { name: 'Find Median from Data Stream', difficulty: 'Hard', pattern: 'Two Heaps' },
      { name: 'Merge K Sorted Lists', difficulty: 'Hard', pattern: 'Min Heap' }
    ]
  },
  {
    category: 'Binary Search',
    problems: [
      { name: 'Binary Search', difficulty: 'Easy', pattern: 'Classic BS' },
      { name: 'Search in Rotated Sorted Array', difficulty: 'Medium', pattern: 'Modified BS' },
      { name: 'Find Minimum in Rotated Sorted Array', difficulty: 'Medium', pattern: 'Modified BS' },
      { name: 'Search a 2D Matrix', difficulty: 'Medium', pattern: 'BS on Matrix' },
      { name: 'Median of Two Sorted Arrays', difficulty: 'Hard', pattern: 'BS on Answer' }
    ]
  }
];

export const algorithmPatterns = [
  {
    name: 'Sliding Window',
    description: 'Maintain a window that slides through the array',
    whenToUse: 'Contiguous subarrays/substrings, min/max in window',
    template: `function slidingWindow(arr, k) {
  let left = 0, result = 0;
  // window state (sum, map, set, etc.)

  for (let right = 0; right < arr.length; right++) {
    // Add arr[right] to window

    while (/* window invalid */) {
      // Remove arr[left] from window
      left++;
    }

    // Update result
  }
  return result;
}`
  },
  {
    name: 'Two Pointers',
    description: 'Use two pointers moving towards each other or same direction',
    whenToUse: 'Sorted arrays, finding pairs, palindromes',
    template: `function twoPointers(arr) {
  let left = 0, right = arr.length - 1;

  while (left < right) {
    // Process current pair
    if (/* condition to move left */) {
      left++;
    } else {
      right--;
    }
  }
}`
  },
  {
    name: 'Fast & Slow Pointers',
    description: 'Two pointers moving at different speeds',
    whenToUse: 'Cycle detection, finding middle, linked list problems',
    template: `function fastSlowPointers(head) {
  let slow = head, fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    // Check condition (cycle, middle, etc.)
  }
  return slow; // middle or meeting point
}`
  },
  {
    name: 'BFS Template',
    description: 'Level-by-level traversal using queue',
    whenToUse: 'Shortest path, level order, unweighted graphs',
    template: `function bfs(start, target) {
  const queue = [start];
  const visited = new Set([start]);
  let level = 0;

  while (queue.length) {
    const size = queue.length;
    for (let i = 0; i < size; i++) {
      const curr = queue.shift();
      if (curr === target) return level;

      for (const neighbor of getNeighbors(curr)) {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          queue.push(neighbor);
        }
      }
    }
    level++;
  }
  return -1;
}`
  },
  {
    name: 'DFS Template',
    description: 'Deep exploration using recursion or stack',
    whenToUse: 'Path finding, tree traversal, permutations',
    template: `function dfs(node, visited = new Set()) {
  if (!node || visited.has(node)) return;
  visited.add(node);

  // Process node

  for (const neighbor of getNeighbors(node)) {
    dfs(neighbor, visited);
  }
}`
  },
  {
    name: 'Backtracking Template',
    description: 'Try choices, backtrack if invalid',
    whenToUse: 'Combinations, permutations, constraint satisfaction',
    template: `function backtrack(result, current, choices, start) {
  if (/* base case */) {
    result.push([...current]);
    return;
  }

  for (let i = start; i < choices.length; i++) {
    // Skip duplicates if needed
    if (i > start && choices[i] === choices[i-1]) continue;

    current.push(choices[i]);
    backtrack(result, current, choices, i + 1);
    current.pop();
  }
}`
  },
  {
    name: 'Binary Search Template',
    description: 'Divide search space in half',
    whenToUse: 'Sorted data, monotonic functions, optimization',
    template: `function binarySearch(arr, target) {
  let left = 0, right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return -1; // or left for insertion point
}`
  },
  {
    name: 'Dynamic Programming Template',
    description: 'Build solution from smaller subproblems',
    whenToUse: 'Optimal substructure, overlapping subproblems',
    template: `// 1D DP
function dp1D(n) {
  const dp = Array(n + 1).fill(0);
  dp[0] = baseCase;

  for (let i = 1; i <= n; i++) {
    dp[i] = /* transition from previous states */;
  }
  return dp[n];
}

// 2D DP
function dp2D(m, n) {
  const dp = Array(m + 1).fill().map(() => Array(n + 1).fill(0));

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      dp[i][j] = /* transition */;
    }
  }
  return dp[m][n];
}`
  }
];
