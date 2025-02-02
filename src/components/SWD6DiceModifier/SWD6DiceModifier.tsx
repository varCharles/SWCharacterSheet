"use client";

import { useStore } from "@/store/SWD6store";
import { SWD6DiceRoller } from "../SWD6DiceRoller";

export const SWD6DiceModifier = ({ target }) => {
  const skills = useStore((state) => state.skillsMap);
  const { baseValue, value, name } = skills[target];
  const dice = baseValue + value;

  return (
    <SWD6DiceRoller dice={dice} stat={name}>
      {dice}D
    </SWD6DiceRoller>
  );
};
