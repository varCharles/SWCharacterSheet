"use client";

import { Modal } from "@/components/Modal";
import { Table } from "@/components/Table";
import { useDrawer } from "@/contexts/DrawerContext";
import { useStore } from "@/store/SWD6store";
import { PlusIcon } from "@heroicons/react/24/outline";
import { useEffect } from "react";
import { Attribute } from "../Attribute";
import { Drawer } from "../Drawer";
export const SWCharacterSheet = ({ characterData }) => {
  const { openDrawer } = useDrawer();
  const setInitialState = useStore((state) => state.setInitialState);
  useEffect(() => {
    setInitialState(characterData); // Initialize Zustand store with the prop data
  }, [characterData, setInitialState]);

  const attributes = useStore((state) => state.attributes);
  const attack = useStore((state) => state.attack);
  const modifiers = useStore((state) => state.modifiers);

  return (
    <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
      <h1 className="text-3xl font-semibold text-white">
        {characterData.name}
        <button
          type="button"
          onClick={() => openDrawer()}
          className="rounded-full bg-gray-800 p-1 m-2 text-white shadow-sm hover:bg-gray-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-500"
        >
          <PlusIcon aria-hidden="true" className="size-5" />
        </button>
      </h1>
      <p className="mt-1 max-w-2xl text-base text-gray-400">
        {characterData.template}
      </p>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <div className="col-span-2">
          <h2 className="text-xl font-semibold mt-6">Attributes</h2>

          <ul className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {attributes.map(({ id, name, baseValue, pips, skills }) => {
              return (
                <Attribute
                  key={id}
                  attribute={{ name, baseValue, pips, skills }}
                />
              );
            })}
          </ul>
        </div>
        <div className="mt-6 border-t border-white/10">
          <dl className="divide-y divide-white/10">
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap- sm:px-0">
              <dt className="text-base/6 font-medium text-white">Height</dt>
              <dd className="mt-1 text-base/6 text-gray-400 sm:col-span-2 sm:mt-0">
                {characterData.height}
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-base/6 font-medium text-white">Weight</dt>
              <dd className="mt-1 text-base/6 text-gray-400 sm:col-span-2 sm:mt-0">
                {characterData.weight}
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-base/6 font-medium text-white">Sex</dt>
              <dd className="mt-1 text-base/6 text-gray-400 sm:col-span-2 sm:mt-0">
                M
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-base/6 font-medium text-white">Age</dt>
              <dd className="mt-1 text-base/6 text-gray-400 sm:col-span-2 sm:mt-0">
                {characterData.age}
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-base/6 font-medium text-white">
                Description
              </dt>
              <dd className="mt-1 text-base/6 text-gray-400 sm:col-span-2 sm:mt-0">
                {characterData.description}
              </dd>
            </div>
          </dl>
        </div>
      </div>
      <h2 className="text-xl font-semibold mt-6">Attack</h2>
      <div className="mt-1 text-base/6 text-gray-400 sm:col-span-2 sm:mt-0">
        <Table tableData={attack} />
      </div>
      <h2 className="text-xl font-semibold mt-6">Background</h2>
      <p className="mt-1 text-base/6 text-gray-400 sm:col-span-2 sm:mt-0">
        {characterData.background}
      </p>

      <h2 className="text-xl font-semibold mt-6">Equipment</h2>
      <ul>
        {characterData.equipment.map((item, idx) => (
          <li key={idx} className="flex justify-between">
            <span>{item.name}</span>
            <span>{item.description}</span>
          </li>
        ))}
      </ul>
      <Modal />
      <Drawer />
    </div>
  );
};
