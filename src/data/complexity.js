export const bigOComplexities = [
  {
    notation: 'O(1)',
    name: 'Constant',
    color: 'green',
    description: 'Time does not change with input size',
    examples: [
      'Array access by index',
      'Hash table lookup',
      'Push/pop from stack',
      'Checking if a number is even/odd'
    ],
    growth: 'No growth - always same time',
    inputExample: { 10: 1, 100: 1, 1000: 1, 10000: 1 }
  },
  {
    notation: 'O(log n)',
    name: 'Logarithmic',
    color: 'emerald',
    description: 'Time increases logarithmically with input size',
    examples: [
      'Binary search',
      'Finding element in BST',
      'Calculating power (fast exponentiation)',
      'Finding GCD (Euclidean algorithm)'
    ],
    growth: 'Doubling input adds constant time',
    inputExample: { 10: 3, 100: 7, 1000: 10, 10000: 13 }
  },
  {
    notation: 'O(n)',
    name: 'Linear',
    color: 'blue',
    description: 'Time grows linearly with input size',
    examples: [
      'Simple loop through array',
      'Linear search',
      'Finding max/min element',
      'Counting occurrences'
    ],
    growth: 'Doubling input doubles time',
    inputExample: { 10: 10, 100: 100, 1000: 1000, 10000: 10000 }
  },
  {
    notation: 'O(n log n)',
    name: 'Linearithmic',
    color: 'cyan',
    description: 'Common in efficient sorting algorithms',
    examples: [
      'Merge sort',
      'Quick sort (average)',
      'Heap sort',
      'Efficient sorting algorithms'
    ],
    growth: 'Slightly more than linear',
    inputExample: { 10: 33, 100: 664, 1000: 9966, 10000: 132877 }
  },
  {
    notation: 'O(n²)',
    name: 'Quadratic',
    color: 'yellow',
    description: 'Time grows with square of input size',
    examples: [
      'Bubble sort',
      'Selection sort',
      'Insertion sort',
      'Nested loops over same collection'
    ],
    growth: 'Doubling input quadruples time',
    inputExample: { 10: 100, 100: 10000, 1000: 1000000, 10000: 100000000 }
  },
  {
    notation: 'O(2ⁿ)',
    name: 'Exponential',
    color: 'orange',
    description: 'Time doubles with each additional input element',
    examples: [
      'Fibonacci (naive recursive)',
      'Power set generation',
      'Traveling salesman (brute force)',
      'Subset sum (brute force)'
    ],
    growth: 'Each additional element doubles time',
    inputExample: { 10: 1024, 20: 1048576, 30: 1073741824, 40: '1.1 trillion' }
  },
  {
    notation: 'O(n!)',
    name: 'Factorial',
    color: 'red',
    description: 'Time grows factorially - extremely fast growth',
    examples: [
      'Generating all permutations',
      'Traveling salesman (brute force)',
      'Solving N-Queens brute force'
    ],
    growth: 'Practically impossible for n > 20',
    inputExample: { 5: 120, 10: 3628800, 15: '1.3 trillion', 20: '2.4 quintillion' }
  }
];

export const complexityComparison = {
  dataStructures: [
    {
      structure: 'Array',
      access: 'O(1)',
      search: 'O(n)',
      insert: 'O(n)',
      delete: 'O(n)',
      space: 'O(n)'
    },
    {
      structure: 'Linked List',
      access: 'O(n)',
      search: 'O(n)',
      insert: 'O(1)*',
      delete: 'O(1)*',
      space: 'O(n)'
    },
    {
      structure: 'Stack',
      access: 'O(n)',
      search: 'O(n)',
      insert: 'O(1)',
      delete: 'O(1)',
      space: 'O(n)'
    },
    {
      structure: 'Queue',
      access: 'O(n)',
      search: 'O(n)',
      insert: 'O(1)',
      delete: 'O(1)',
      space: 'O(n)'
    },
    {
      structure: 'Hash Table',
      access: 'N/A',
      search: 'O(1)*',
      insert: 'O(1)*',
      delete: 'O(1)*',
      space: 'O(n)'
    },
    {
      structure: 'BST (balanced)',
      access: 'O(log n)',
      search: 'O(log n)',
      insert: 'O(log n)',
      delete: 'O(log n)',
      space: 'O(n)'
    },
    {
      structure: 'Heap',
      access: 'O(1)**',
      search: 'O(n)',
      insert: 'O(log n)',
      delete: 'O(log n)',
      space: 'O(n)'
    },
    {
      structure: 'Trie',
      access: 'O(m)',
      search: 'O(m)',
      insert: 'O(m)',
      delete: 'O(m)',
      space: 'O(n*m)'
    }
  ],
  sortingAlgorithms: [
    {
      algorithm: 'Bubble Sort',
      best: 'O(n)',
      average: 'O(n²)',
      worst: 'O(n²)',
      space: 'O(1)',
      stable: true
    },
    {
      algorithm: 'Selection Sort',
      best: 'O(n²)',
      average: 'O(n²)',
      worst: 'O(n²)',
      space: 'O(1)',
      stable: false
    },
    {
      algorithm: 'Insertion Sort',
      best: 'O(n)',
      average: 'O(n²)',
      worst: 'O(n²)',
      space: 'O(1)',
      stable: true
    },
    {
      algorithm: 'Merge Sort',
      best: 'O(n log n)',
      average: 'O(n log n)',
      worst: 'O(n log n)',
      space: 'O(n)',
      stable: true
    },
    {
      algorithm: 'Quick Sort',
      best: 'O(n log n)',
      average: 'O(n log n)',
      worst: 'O(n²)',
      space: 'O(log n)',
      stable: false
    },
    {
      algorithm: 'Heap Sort',
      best: 'O(n log n)',
      average: 'O(n log n)',
      worst: 'O(n log n)',
      space: 'O(1)',
      stable: false
    },
    {
      algorithm: 'Counting Sort',
      best: 'O(n + k)',
      average: 'O(n + k)',
      worst: 'O(n + k)',
      space: 'O(k)',
      stable: true
    },
    {
      algorithm: 'Radix Sort',
      best: 'O(nk)',
      average: 'O(nk)',
      worst: 'O(nk)',
      space: 'O(n + k)',
      stable: true
    }
  ]
};

export const spaceComplexityGuide = {
  title: 'Space Complexity Analysis',
  description: 'Space complexity measures the total amount of memory an algorithm uses relative to input size.',
  components: [
    {
      name: 'Input Space',
      description: 'Memory used by the input data',
      note: 'Often not counted in space complexity analysis'
    },
    {
      name: 'Auxiliary Space',
      description: 'Extra space used by the algorithm',
      note: 'This is what we typically measure'
    },
    {
      name: 'Stack Space',
      description: 'Memory used by recursive calls',
      note: 'Each recursive call adds to the call stack'
    }
  ],
  examples: [
    {
      name: 'In-place algorithm',
      space: 'O(1)',
      example: 'Reversing array with two pointers',
      code: `function reverse(arr) {
  let left = 0, right = arr.length - 1;
  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }
}`
    },
    {
      name: 'Linear extra space',
      space: 'O(n)',
      example: 'Creating a copy of array',
      code: `function duplicate(arr) {
  const copy = [...arr]; // O(n) extra space
  return copy;
}`
    },
    {
      name: 'Recursive stack space',
      space: 'O(n)',
      example: 'Factorial calculation',
      code: `function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
  // Each call adds to stack: O(n) space
}`
    },
    {
      name: 'Quadratic space',
      space: 'O(n²)',
      example: '2D DP matrix',
      code: `function lcs(str1, str2) {
  const m = str1.length, n = str2.length;
  // O(m * n) space
  const dp = Array(m + 1).fill()
    .map(() => Array(n + 1).fill(0));
  // ...
}`
    }
  ],
  tips: [
    {
      title: 'Optimize Space in DP',
      description: 'If current row only depends on previous row, use only 2 rows or 1 row'
    },
    {
      title: 'In-place vs Creating New',
      description: 'Modifying input saves space but may have side effects'
    },
    {
      title: 'Tail Recursion',
      description: 'Some languages optimize tail-recursive functions to O(1) space'
    },
    {
      title: 'Iterative vs Recursive',
      description: 'Converting recursion to iteration often saves stack space'
    }
  ]
};

export const timeComplexityTips = [
  {
    title: 'Identify the Bottleneck',
    description: 'Focus on the part of your algorithm that runs the most times',
    example: 'In nested loops, the inner loop is usually the bottleneck'
  },
  {
    title: 'Drop Constants and Lower Terms',
    description: 'O(2n) = O(n), O(n² + n) = O(n²)',
    example: 'We care about growth rate, not exact count'
  },
  {
    title: 'Consider Different Inputs',
    description: 'Sometimes different inputs have different complexities',
    example: 'O(n + m) for two different input arrays'
  },
  {
    title: 'Amortized Analysis',
    description: 'Average time per operation over many operations',
    example: 'Dynamic array push is O(1) amortized despite occasional O(n) resizes'
  },
  {
    title: 'Best, Average, Worst Case',
    description: 'Algorithms can perform differently in different scenarios',
    example: 'QuickSort is O(n log n) average but O(n²) worst case'
  }
];

export const commonMistakes = [
  {
    mistake: 'Ignoring hidden loops',
    correct: 'String concatenation in loop is O(n²), not O(n)',
    code: `// Bad: O(n²) due to string immutability
let s = "";
for (let i = 0; i < n; i++) {
  s += char; // Creates new string each time
}

// Good: O(n)
const arr = [];
for (let i = 0; i < n; i++) {
  arr.push(char);
}
const s = arr.join("");`
  },
  {
    mistake: 'Forgetting about built-in functions',
    correct: 'arr.includes() is O(n), not O(1)',
    code: `// O(n²) - includes is O(n)
for (let i = 0; i < arr.length; i++) {
  if (arr.includes(target)) { ... }
}

// O(n) - use Set for O(1) lookup
const set = new Set(arr);
for (let i = 0; i < arr.length; i++) {
  if (set.has(target)) { ... }
}`
  },
  {
    mistake: 'Recursive space complexity',
    correct: 'Recursion uses O(depth) stack space',
    code: `// O(n) space due to call stack
function fib(n) {
  if (n <= 1) return n;
  return fib(n-1) + fib(n-2);
}

// O(1) space with iteration
function fib(n) {
  let a = 0, b = 1;
  for (let i = 2; i <= n; i++) {
    [a, b] = [b, a + b];
  }
  return b;
}`
  },
  {
    mistake: 'Assuming hash operations are always O(1)',
    correct: 'Worst case with many collisions is O(n)',
    code: `// Hash table with good hash: O(1) average
// With poor hash or many collisions: O(n)

// Tip: Use proper data types as keys
// Bad: Objects as keys (reference comparison)
// Good: Primitives or proper hash functions`
  }
];
