"use client";
import { rollSWD6Dice } from "@/utils/Dice";
import { useMemo, useState } from "react";
import { Stepper } from "../Stepper";

export const FreeRoll = ({
  dice = 0,
  penalties = 0,
  bonuses = 0,
  stat,
  pips,
}) => {
  const [roll, setRoll] = useState({ dice, penalties, bonuses });
  const [output, setOutput] = useState("");
  const updateRoll = (key, value) => {
    setRoll((prevRoll) => ({
      ...prevRoll,
      [key]: value,
    }));
  };

  const total = useMemo(() => {
    // return Object.values(roll).reduce((sum, num) => sum + num, 0);
    return roll.dice + roll.bonuses - roll.penalties;
  }, [roll]);

  const rollDice = () => {
    const results = rollSWD6Dice(total, pips);
    const out = (
      <>
        <div className="flex justify-self-center">
          <div className="text-white text-center size-24 font-bold bg-gray-800 text-5xl pt-6 rounded-full m-2">
            {results.total}
          </div>
        </div>
        <p className="text-lg text-gray-500 mt-2 text-center">
          {results.rolls.join(" + ")}
        </p>
      </>
    );
    setOutput(out);
  };

  const pipString = pips > 0 ? `+${pips}` : "";
  return (
    <div className="items-baseline justify-between gap-x-4 gap-y-2 bg-white px-4 py-10 sm:px-6 xl:px-8">
      <p className="w-full flex-none text-base/6 font-semibold text-gray-500 capitalize">
        Rolling {total}D{pipString} for {stat}
      </p>
      <div className="grid  grid-cols-2 sm:gap-0 md:gap-5">
        {/* <Stepper label="dice" initial={dice} onChange={updateRoll} /> */}
        <Stepper
          label="penalties"
          initial={penalties}
          value={penalties}
          onChange={updateRoll}
        />
        <Stepper label="bonuses" initial={bonuses} onChange={updateRoll} />
      </div>
      <div className="mt-2 flex-col">
        <div className="-mr-px focus-within:relative">
          <button
            className="w-full rounded-lg bg-gray-800 px-3 py-1 text-white shadow-sm ring-1 ring-inset ring-gray-600 hover:bg-gray-600"
            onClick={() => rollDice(dice)}
            disabled={total < 1}
          >
            Roll {total}D
          </button>
        </div>
      </div>
      {output}
    </div>
  );
};
