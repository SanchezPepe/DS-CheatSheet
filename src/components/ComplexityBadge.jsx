const complexityStyles = {
  'O(1)': 'complexity-constant',
  'O(log n)': 'complexity-logarithmic',
  'O(n)': 'complexity-linear',
  'O(n log n)': 'complexity-linearithmic',
  'O(n²)': 'complexity-quadratic',
  'O(2^n)': 'complexity-exponential',
  'O(2ⁿ)': 'complexity-exponential',
  'O(n!)': 'complexity-factorial',
};

export default function ComplexityBadge({ complexity, className = '' }) {
  // Find matching style or default to linear
  let style = 'complexity-linear';
  for (const [key, value] of Object.entries(complexityStyles)) {
    if (complexity.includes(key) || complexity.startsWith(key.split(' ')[0])) {
      style = value;
      break;
    }
  }

  // Handle special cases
  if (complexity.includes('log')) style = 'complexity-logarithmic';
  if (complexity.includes('²') || complexity.includes('^2')) style = 'complexity-quadratic';
  if (complexity.includes('!')) style = 'complexity-factorial';
  if (complexity === 'O(1)' || complexity.includes('O(1)')) style = 'complexity-constant';

  return (
    <span className={`complexity-badge ${style} ${className}`}>
      {complexity}
    </span>
  );
}
