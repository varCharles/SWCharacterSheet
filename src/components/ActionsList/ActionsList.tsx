"use client";

import { useStore } from "@/store/SWD6store";
import { rollSWD6Dice } from "@/utils/Dice";
import { PlusIcon } from "@heroicons/react/20/solid";
import { useState } from "react";
import { ACComboBox } from "../ACComboBox";
import { ActionItem } from "../ActionItem";

export const ActionsList = () => {
  const actionOptions = useStore((state) => state.actions);
  const modifiers = useStore((state) => state.modifiers);
  const [actionList, setActionList] = useState([]);
  const [selectedAction, setSelectedAction] = useState(actionOptions[0]);

  const stunned = modifiers.stunned ? 1 : 0;
  const wounded = modifiers.wounded ? 1 : 0;
  const wounded2x = modifiers.wounded2x ? 1 : 0;
  const fatigue = modifiers.fatigue ? 1 : 0;
  const fatigue2x = modifiers.fatigue2x ? 1 : 0;
  const localModifiers = {
    actions: 0,
    stun: stunned,
    wound: wounded + wounded2x,
    fatigue: fatigue + fatigue2x,
  };
  localModifiers.actions = actionList.length === 0 ? 0 : actionList.length - 1;
  const actionPenalty = Object.values(localModifiers).reduce(
    (sum, value) => sum + value,
    0
  );

  // const modifiers.actions = actionList.length === 0 ? 0 : actionList.length - 1;

  const addAction = ({ id, name, dice }) => {
    const uid = crypto.randomUUID();
    setSelectedAction({ id, name, dice });
    setActionList([...actionList, { uid, id, name, dice }]);
  };

  const onDelete = (uid) => {
    setActionList(actionList.filter((a) => a.uid !== uid));
  };

  const rollActions = () => {
    const actionClone = [...actionList];
    actionClone.forEach((action) => {
      const roll = rollSWD6Dice(action.dice - actionPenalty);
      action.roll = roll;
    });
    setActionList(actionClone);
  };

  return (
    <div className="bg-black p-5">
      Action Planner
      <div className="flex">
        <span>
          <ACComboBox
            data={actionOptions}
            onChange={addAction}
            selectedAction={selectedAction}
          />
        </span>
        <span>
          <button
            type="button"
            onClick={() => addAction(selectedAction)}
            className="rounded-full bg-gray-800 p-1 m-2 text-white shadow-sm hover:bg-gray-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-500"
          >
            <PlusIcon aria-hidden="true" className="size-5" />
          </button>
        </span>
      </div>
      <div className="mx-auto mt-4 max-w-7xl">
        <div className="text-center grid grid-cols-6 gap-px bg-white/5">
          <div className="bg-gray-900 px-4 py-3 sm:px-6 lg:px-8">
            <p className="text-sm/6 font-medium text-gray-400">actions</p>
            <p className="mt-2  items-baseline gap-x-2">
              <span className="text-2xl font-semibold tracking-tight text-white">
                {localModifiers.actions}
              </span>
            </p>
          </div>

          <div className="bg-gray-900 px-4 py-3 sm:px-6 lg:px-8">
            <p className="text-sm/6 font-medium text-gray-400">stun</p>
            <p className="mt-2  items-baseline gap-x-2">
              <span className="text-2xl font-semibold tracking-tight text-white">
                {localModifiers.stun}
              </span>
            </p>
          </div>
          <div className="bg-gray-900 px-4 py-3 sm:px-6 lg:px-8">
            <p className="text-sm/6 font-medium text-gray-400">wound</p>
            <p className="mt-2  items-baseline gap-x-2">
              <span className="text-2xl font-semibold tracking-tight text-white">
                {localModifiers.wound}
              </span>
            </p>
          </div>
          <div className="bg-gray-900 px-4 py-3 sm:px-6 lg:px-8">
            <p className="text-sm/6 font-medium text-gray-400">fatigue</p>
            <p className="mt-2  items-baseline gap-x-2">
              <span className="text-2xl font-semibold tracking-tight text-white">
                {localModifiers.fatigue}
              </span>
            </p>
          </div>
          <div className="bg-gray-900 px-4 py-3 sm:px-6 lg:px-8">
            <p className="text-sm/6 font-medium text-gray-400">total</p>
            <p className="mt-2  items-baseline gap-x-2">
              <span className="text-2xl font-semibold tracking-tight text-white">
                {actionPenalty}
              </span>
            </p>
          </div>
          <div className="bg-gray-900 px-4 py-3 sm:px-6 lg:px-8">
            <p className="text-sm/6 font-medium text-gray-400">roll</p>
            <p className="mt-2  items-baseline gap-x-2">
              <span className="text-1xl font-semibold tracking-tight text-white">
                <button
                  type="button"
                  onClick={rollActions}
                  className="rounded-full bg-gray-800 p-1 m-2 text-white shadow-sm hover:bg-gray-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-500"
                >
                  <PlusIcon aria-hidden="true" className="size-5" />
                </button>
              </span>
            </p>
          </div>
        </div>
      </div>
      <div>
        <ul
          role="list"
          className="mt-3 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4"
        >
          {actionList.map((action) => {
            return (
              <ActionItem
                key={action.uid}
                action={action}
                onDelete={onDelete}
                modifiers={actionPenalty}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
};
