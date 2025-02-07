import { Skill } from "../Skill";
import { SWD6DiceModifier } from "../SWD6DiceModifier";

export const Attribute = ({ attribute }) => {
  const { id, name, pips, skills } = attribute;
  const pipString = pips > 0 ? `+${pips}` : "";
  return (
    <li>
      <h3 className="text-base capitalize font-semibold text-white ">
        {name}{" "}
        <span className="text-xs font-semibold text-white ">
          <SWD6DiceModifier target={id} /> {pipString}
        </span>
      </h3>

      <ul>
        {skills.map(({ id, name, value }) => {
          return <Skill key={id} skill={{ id, name, value }} />;
        })}
      </ul>
    </li>
  );
};
