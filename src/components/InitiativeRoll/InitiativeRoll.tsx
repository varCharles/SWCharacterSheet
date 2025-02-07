import { SWD6DiceModifier } from "../SWD6DiceModifier";

export const InitiativeRoll = () => {
  const target = "sk4";
  return (
    <span className="flex-column">
      <div>initiative</div>
      <SWD6DiceModifier target={target} />
    </span>
  );
};
