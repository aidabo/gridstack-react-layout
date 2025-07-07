import {
  useState,
} from "react";

// Add below your Text component
function Counter({ initialCount }: { initialCount: number }) {
  const [count, setCount] = useState(initialCount);
  return (
    <div className="w-full h-full flex items-center justify-center gap-2">
      <button onClick={() => setCount(c => c-1)}>-</button>
      <span>{count}</span>
      <button onClick={() => setCount(c => c+1)}>+</button>
    </div>
  );
}

export default Counter
