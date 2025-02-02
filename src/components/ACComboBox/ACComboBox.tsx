"use client";

import { useStore } from "@/store/SWD6store";
import {
  Combobox,
  ComboboxButton,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
} from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { useState } from "react";

export const ACComboBox = ({ onChange, selectedAction }) => {
  const actions = useStore((state) => state.actions);

  // console.log(actions);
  const [query, setQuery] = useState("");
  // const [selectedAction, setSelectedAction] = useState(null);

  const setSelected = (action) => {
    onChange(action);
  };
  const filteredActions =
    query === ""
      ? actions
      : actions.filter((action) => {
          return action.name.toLowerCase().includes(query.toLowerCase());
        });

  return (
    <Combobox
      as="div"
      value={selectedAction}
      onChange={(action) => {
        setQuery("");
        setSelected(action);
      }}
    >
      <div className="relative mt-2">
        <ComboboxInput
          className="block w-full rounded-md bg-white py-1.5 pl-3 pr-12 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
          onChange={(event) => setQuery(event.target.value)}
          onBlur={() => setQuery("")}
          displayValue={(action) => action?.name}
        />
        <ComboboxButton className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
          <ChevronUpDownIcon
            className="size-5 text-gray-400"
            aria-hidden="true"
          />
        </ComboboxButton>

        {filteredActions.length > 0 && (
          <ComboboxOptions className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
            {filteredActions.map((action) => (
              <ComboboxOption
                key={action.name}
                value={action}
                className="group relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 data-[focus]:bg-indigo-600 data-[focus]:text-white data-[focus]:outline-none"
              >
                <div className="flex justify-between">
                  <span className="truncate group-data-[selected]:font-semibold">
                    {action.name}
                  </span>
                  <span className="ml-2 truncate text-gray-500 group-data-[focus]:text-indigo-200">
                    {action.dice}D
                  </span>
                </div>

                <span className="absolute inset-y-0 right-0 hidden items-center pr-4 text-indigo-600 group-data-[selected]:flex group-data-[focus]:text-white">
                  <CheckIcon className="size-5" aria-hidden="true" />
                </span>
              </ComboboxOption>
            ))}
          </ComboboxOptions>
        )}
      </div>
    </Combobox>
  );
};
