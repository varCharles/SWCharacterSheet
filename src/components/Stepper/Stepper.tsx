"use client";
import { useState } from "react";

export const Stepper = ({ label, initial, onChange }) => {
  const initValue = initial ? initial : 0;
  const [value, setValue] = useState(initValue);

  const increment = () => {
    const newValue = value + 1;
    setValue(newValue);
    onChange(label, newValue);
  };
  const decrement = () => {
    const newValue = value - 1 < 0 ? 0 : value - 1;

    setValue(newValue);
    onChange(label, newValue);
  };

  return (
    <div className="mt-2 flex-col">
      {label && (
        <div>
          <label
            htmlFor="query"
            className="block text-sm/6 font-medium text-gray-800"
          >
            {label}
          </label>
        </div>
      )}
      <div className="mt-2 flex-row w-28">
        <div className="-mr-px grid grow grid-cols-3 focus-within:relative">
          <button
            type="button"
            onClick={() => decrement()}
            className="flex shrink-0 items-center gap-x-1.5 rounded-l-md bg-gray-800 text-white px-3 py-2 text-sm font-semibold shadow-sm ring-1 ring-inset ring-gray-600 hover:bg-gray-600  hover:outline-gray-600"
          >
            -
          </button>

          <input
            id="query"
            name="query"
            type="text"
            value={value}
            readOnly
            className="block w-10 bg-gray-900 py-1.5 text-base text-white outline outline-1 -outline-offset-1 outline-gray-600 text-center sm:text-sm/6"
          />

          <button
            type="button"
            onClick={() => increment()}
            className="flex shrink-0 items-center gap-x-1.5 rounded-r-md bg-gray-800 text-white px-3 py-2 text-sm font-semibold shadow-sm ring-1 ring-inset ring-gray-600 hover:bg-gray-600  hover:outline-gray-600"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};
