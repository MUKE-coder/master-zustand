"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function CounterPage() {
  const [count, setCount] = useState(0);

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => prev - 1);
  const reset = () => setCount(0);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
          Cool Counter
        </h1>
        <div className="flex flex-col items-center">
          <div className="text-9xl font-bold text-gray-700 mb-8">{count}</div>
          <div className="flex space-x-4">
            <Button
              onClick={decrement}
              className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-4 px-8 rounded-full text-2xl transition-colors duration-200"
            >
              -
            </Button>
            <Button
              onClick={increment}
              className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-4 px-8 rounded-full text-2xl transition-colors duration-200"
            >
              +
            </Button>
          </div>
          <Button
            onClick={reset}
            className="mt-6 bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-full text-xl transition-colors duration-200"
          >
            Reset
          </Button>
        </div>
      </div>
    </div>
  );
}
