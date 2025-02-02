import { SWD6DiceModifier } from "../SWD6DiceModifier";

export const Skill = ({ skill }) => {
  if (!skill) return <></>;
  const { id, name, value } = skill;
  const classname =
    value > 0
      ? "flex justify-between text-white capitalize px-2"
      : "flex justify-between text-gray-400 capitalize px-2";
  return (
    <li className={classname}>
      <span>{name}:</span>
      <span className="text-xs font-semibold">
        <SWD6DiceModifier target={id} />
      </span>
    </li>
  );
};
