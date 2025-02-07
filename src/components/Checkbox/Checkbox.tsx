import { useStore } from "@/store/SWD6store";

export const Checkbox = ({ id, onChange, checked }) => {
  return (
    <div className="flex h-6 shrink-0 items-center">
      <div className="group grid size-4 grid-cols-1">
        <input
          id={id}
          name={id}
          type="checkbox"
          checked={checked}
          onChange={() => onChange(id)}
          aria-describedby="comments-description"
          className="col-start-1 row-start-1 appearance-none rounded-full bg-gray-800  text-white shadow-sm ring-1 ring-inset ring-gray-600 hover:bg-gray-600 checked:border-gray-600 checked:bg-gray-600 indeterminate:border-gray-600 indeterminate:bg-gray-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
        />
        <svg
          fill="none"
          viewBox="0 0 14 14"
          className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-[:disabled]:stroke-gray-950/25"
        >
          <path
            d="M3 8L6 11L11 3.5"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="opacity-0 group-has-[:checked]:opacity-100"
          />
          <path
            d="M3 7H11"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="opacity-0 group-has-[:indeterminate]:opacity-100"
          />
        </svg>
      </div>
    </div>
  );
};

export const WoundedUI = () => {
  const modifiers = useStore((state) => state.modifiers);
  const toggleModifier = useStore((state) => state.toggleModifier);
  const onChange = (id) => {
    toggleModifier(id);
  };
  return (
    <div>
      <div className="text-sm/6 flex">
        <label htmlFor="comments" className="font-medium text-gray-100 pr-2">
          Stunned
        </label>
        <Checkbox
          id="stunned"
          onChange={onChange}
          checked={modifiers.stunned}
        />
      </div>
      <div className="text-sm/6 flex">
        <label htmlFor="comments" className="font-medium text-gray-100 pr-2">
          wounded
        </label>
        <span></span>
        <Checkbox
          id="wounded"
          onChange={onChange}
          checked={modifiers.wounded}
        />
        <Checkbox
          id="wounded2x"
          onChange={onChange}
          checked={modifiers.wounded2x}
        />
      </div>
      <div className="text-sm/6 flex">
        <label htmlFor="comments" className="font-medium text-gray-100 pr-2">
          fatigue
        </label>
        <span></span>
        <Checkbox
          id="fatigue"
          onChange={onChange}
          checked={modifiers.fatigue}
        />
        <Checkbox
          id="fatigue2x"
          onChange={onChange}
          checked={modifiers.fatigue2x}
        />
      </div>
    </div>
  );
};
