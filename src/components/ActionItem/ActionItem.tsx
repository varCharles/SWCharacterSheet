"use client";

import { TrashIcon } from "@heroicons/react/20/solid";

export const ActionItem = ({ action, onDelete, modifiers }) => {
  const { uid, name, dice, roll } = action;
  const modifiedDice = dice - modifiers;
  return (
    <li className="col-span-1 flex rounded-md text-white shadow-sm ring-1 ring-inset ring-gray-600 ">
      <div className="flex w-16 shrink-0 items-center justify-center rounded-l-md text-sm font-medium bg-gray-800">
        {modifiedDice}D
      </div>
      <div className="flex flex-1 items-center justify-between truncate ">
        <div className="flex-1 truncate px-4 py-2 text-sm">
          <p className="font-medium capitalize">{name}</p>
          {roll && roll.total ? (
            <div>
              <p className="text-gray-200 font-semibold">
                Total:{" "}
                <span className="rounded-full bg-gray-800 p-1  text-white ">
                  {roll.total}
                </span>
              </p>
              <p className="text-gray-200">Rolls: {roll.rolls.join(" + ")}</p>
              <p className="text-gray-200">
                WD: {roll.wildDieBreakdown.join(" + ")}
              </p>
            </div>
          ) : null}
        </div>
        <div className="shrink-0 pr-2">
          <button
            onClick={() => onDelete(uid)}
            type="button"
            className="inline-flex size-8 items-center justify-center rounded-full bg-transparent bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            <span className="sr-only">Delete action</span>
            <TrashIcon aria-hidden="true" className="size-5" />
          </button>
        </div>
      </div>
    </li>
  );
};
