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
  pips: number;
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

type Modifiers = {
  stunned: boolean;
  wounded: boolean;
  wounded2x: boolean;
  fatigue: boolean;
  fatigue2x: boolean;
};

type State = {
  attributes: Attribute[];
  attack: Attack[];
  modifiers: Modifiers[];
  actions: Action[];
  updateWounded: (value: boolean) => void;
  addModifier: (modifier: Modifier) => void;
  removeModifier: (modifierName: string) => void;
  addAttack: (attack: Attack) => void;
  removeAttack: (attackName: string) => void;
};

export const useStore = create<State>((set) => ({
  attributes: [],
  attack: [],
  modifiers: {
    stunned: false,
    wounded: false,
    wounded2x: false,
    fatigue: false,
    fatigue2x: false,
  },
  actions: [],
  skillsMap: {},

  setInitialState: (data) => {
    // Build a flat skills map
    const skillsMap: Record<string, Skill> = {};
    const actions: Array<Action> = [];

    data.attributes?.forEach((attribute: Attribute) => {
      const { id, name, baseValue, pips } = attribute;
      actions.push({ name, dice: baseValue, pips });
      skillsMap[id] = attribute;
      // attribute.skills.forEach((skill) => {
      //   skill.pips = attribute.pips;
      //   const { id, name, value, baseValue } = skill;
      //   const dice = value + baseValue;
      //   actions.push({ id, name, dice, pips });
      // });
    });

    data.attributes?.forEach((attribute: Attribute) =>
      attribute.skills.forEach((skill) => {
        skill.pips = attribute.pips;
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

  toggleModifier: (key) =>
    set((state) => ({
      modifiers: {
        ...state.modifiers,
        [key]: !state.modifiers[key], // Toggle the boolean value
      },
    })),

  addAttack: (attack) =>
    set((state) => ({ attack: [...state.attack, attack] })),

  removeAttack: (attackName) =>
    set((state) => ({
      attack: state.attack.filter((atk) => atk.name !== attackName),
    })),
}));
