"use client";

import { useStore } from "@/store/SWD6store";
import { SWD6DiceRoller } from "../SWD6DiceRoller";

export const SWD6DiceModifier = ({ target }) => {
  const skills = useStore((state) => state.skillsMap);
  const modifiers = useStore((state) => state.modifiers);
  const stunned = modifiers.stunned ? 1 : 0;
  const wounded = modifiers.wounded ? 1 : 0;
  const wounded2x = modifiers.wounded2x ? 1 : 0;
  if (!skills[target]) return <></>;
  const { baseValue, value, name } = skills[target];
  const diceNum = value ? baseValue + value : baseValue;
  const penalty = stunned + wounded + wounded2x;
  const total = diceNum - penalty;
  const dice = total < 1 ? 0 : total;

  return (
    <SWD6DiceRoller dice={dice} stat={name}>
      {dice}D
    </SWD6DiceRoller>
  );
};
