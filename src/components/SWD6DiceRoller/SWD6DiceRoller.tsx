"use client";

import { useModal } from "@/contexts/ModalContext";
import { rollSWD6Dice } from "@/utils/Dice";

export const SWD6DiceRoller = ({ children, dice, stat }) => {
  const { openModal } = useModal();

  const formatWildDie = (dice) => {
    if (dice.at(-1) === "1 (Penalty)") {
      const newDice = dice.slice(0, -2);

      return (
        <>
          {newDice.join(" + ")}
          <span className="text-rose-600 line-through"> + 1</span>
          <span className="text-rose-600"> (Penalty) </span>
        </>
      );
    }
    return dice.join(" + ");
  };
  const formatDiceContent = ({ total, rolls, wildDieBreakdown }, dice) => {
    const;
    return (
      <div className="text-center">
        <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2 bg-white px-4 py-10 sm:px-6 xl:px-8">
          <dt className="w-full flex-none text-base/6 font-semibold text-gray-500 capitalize">
            rolling {dice}D for {stat}
          </dt>
          <dd className="w-full flex-none text-5xl/10 font-bold tracking-tight text-gray-900">
            {total}
          </dd>
          <dd className="w-full flex-none text-base/6 font-medium text-gray-500">
            rolls: {rolls.join(" + ")}
          </dd>
          <dd className="w-full flex-none text-base/6 font-medium text-gray-500">
            wild die: {formatWildDie(wildDieBreakdown)}
          </dd>
        </div>
      </div>
    );
  };
  const rollDice = (dice: number) => {
    const results = rollSWD6Dice(dice);
    const modalContent = formatDiceContent(results, dice);
    openModal(modalContent);
  };
  return (
    <button
      className="rounded-full bg-gray-800 px-3 py-1 text-white shadow-sm ring-1 ring-inset ring-gray-600 hover:bg-gray-600"
      onClick={() => rollDice(dice)}
    >
      {children}
    </button>
  );
};
