import { SWD6DiceRoller } from "@/components/SWD6DiceRoller";
import { Skill } from "../Skill";

export const Attribute = ({ attribute }) => {
  const renderDiceValue = (baseValue: number, pips: number, name: string) => {
    const diceString = `${baseValue}D`;
    const pipString = pips > 0 ? `+${pips}` : "";

    return (
      <span className="text-xs font-semibold text-white ">
        <SWD6DiceRoller dice={baseValue} stat={name}>
          {diceString}
        </SWD6DiceRoller>
        {pipString}
      </span>
    );
  };
  const { name, baseValue, pips, skills } = attribute;
  return (
    <li>
      <h3 className="text-base capitalize font-semibold text-white ">
        {name} <span>{renderDiceValue(baseValue, pips, name)}</span>
      </h3>

      <ul>
        {skills.map(({ id, name, value }) => {
          return <Skill key={id} skill={{ id, name, value }} />;
        })}
      </ul>
    </li>
  );
};
