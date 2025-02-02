import { create } from "zustand";

type Action = {
  name: string;
  value: number;
};

type Skill = {
  id: string;
  name: string;
  value: number;
  baseValue: number;
};

type Attribute = {
  id: number;
  name: string;
  baseValue: number;
  pips: number;
  skills: Skill[];
};

type Attack = {
  name: string;
  type: string;
  roll: string;
  range: string;
  damage: number;
  extra: number;
  special: string;
};

type Modifier = {
  name: string;
  effect: number;
};

type State = {
  attributes: Attribute[];
  attack: Attack[];
  modifiers: Modifier[];
  actions: Action[];
  addModifier: (modifier: Modifier) => void;
  removeModifier: (modifierName: string) => void;
  addAttack: (attack: Attack) => void;
  removeAttack: (attackName: string) => void;
};

export const useStore = create<State>((set) => ({
  attributes: [],
  attack: [],
  modifiers: [],
  actions: [],
  skillsMap: {},

  setInitialState: (data) => {
    // Build a flat skills map
    const skillsMap: Record<string, Skill> = {};
    const actions = [];

    data.attributes?.forEach((attribute: Attribute) => {
      const { name, baseValue } = attribute;
      actions.push({ name, dice: baseValue });
      attribute.skills.forEach((skill) => {
        const { id, name, value, baseValue } = skill;
        const dice = value + baseValue;
        actions.push({ id, name, dice });
      });
    });

    data.attributes?.forEach((attribute: Attribute) =>
      attribute.skills.forEach((skill) => {
        skillsMap[skill.id] = skill;
      })
    );

    set((state) => ({
      ...state,
      ...data,
      skillsMap, // Store the lookup table
      actions,
    }));
  },

  getSkillById: (id) => set((state) => state.skillsMap[id]), // Lookup from the flat map

  addModifier: (modifier) =>
    set((state) => ({ modifiers: [...state.modifiers, modifier] })),

  removeModifier: (modifierName) =>
    set((state) => ({
      modifiers: state.modifiers.filter((mod) => mod.name !== modifierName),
    })),

  addAttack: (attack) =>
    set((state) => ({ attack: [...state.attack, attack] })),

  removeAttack: (attackName) =>
    set((state) => ({
      attack: state.attack.filter((atk) => atk.name !== attackName),
    })),
}));
