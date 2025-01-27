import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex items-center justify-center h-screen w-full">
      <div className="card w-1/4 bg-base-300 h-96">
        <div className="card-body">
          <h1 className="text-9xl font-semibold text-primary text-center">
            {count}
          </h1>

          <div className="flex flex-row justify-evenly items-center my-16">
            <button
              className="btn btn-success w-16 h-14"
              onClick={() => setCount(count + 1)}
            >
              +
            </button>
            <button
              className="btn btn-error w-16 h-14"
              onClick={() => setCount(count - 1)}
            >
              -
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Counter;
