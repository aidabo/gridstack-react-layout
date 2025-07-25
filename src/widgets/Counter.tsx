import { useState } from "react";

// Add below your Text component
function Counter({ initialCount }: { initialCount: number }) {
  const [count, setCount] = useState(initialCount);

  return (
    <div className="flex items-center justify-center p-0">
      {/* <h3 className="text-lg font-bold">{title}</h3> */}
      <button onClick={() => setCount(c => c-1)}>-</button>
      <span>{count}</span>
      <button onClick={() => setCount(c => c+1)}>+</button>
    </div>
  );
}

export default Counter
