"use client";

import { useModal } from "@/contexts/ModalContext";
import { FreeRoll } from "../FreeRoll";

export const SWD6DiceRoller = ({ dice, penalties, stat, pips }) => {
  const { openModal } = useModal();
  const formatDiceContent = (dice) => {
    return (
      <>
        <FreeRoll dice={dice} stat={stat} pips={pips} penalties={penalties} />
      </>
    );
  };
  const rollDice = (dice: number) => {
    // const results = rollSWD6Dice(dice);
    const modalContent = formatDiceContent(dice);

    openModal(modalContent);
  };
  return (
    <button
      className="rounded-full bg-gray-800 px-3 py-1 text-white shadow-sm ring-1 ring-inset ring-gray-600 hover:bg-gray-600"
      onClick={() => rollDice(dice)}
    >
      {dice}D
    </button>
  );
};
