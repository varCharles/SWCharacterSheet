export const charactersList = () => {
  return [
    {
      name: "Rynn Cortis",
      template: "Brash Pilot",
      age: 38,
      height: "6 feet",
      weight: "160 lbs",
      description:
        "Rynn Cortis stands at 6 feet tall, his lean 160-pound frame reflecting a life of constant movement and quick reflexes rather than brute strength.  A faint scar runs just above his right eyebrow, a souvenir from a cockpit mishap years ago.",
      background:
        "Rynn Cortis thrives on instinct, often acting first and figuring out the details later—a trait that earned equal parts admiration and exasperation during their time with the Rebellion. His 'the plan will come later' philosophy has seen them through numerous scrapes, though it’s not without its close calls.Early in the the war, his tactical transport was shot down in hostile territory. He, and his crew,  miraculously survived the crash. He’s kept a salvaged fragment of the ship’s hull as a keepsake. This shard is now his lucky charm, a talisman of survival and a reminder that even in the worst situations, he can make it out alive. Grounded life doesn’t suit Rynn; the hum of an engine and the feel of a cockpit are where they truly belong. Every opportunity to fly, whether a freighter, fighter, or even a rickety speeder, is met with childlike enthusiasm. He’s saving his credits to purchase a used YT-2400 light freighter that’s for sale at a local ship yard (~ 32000 credits according to sourcebooks - pg 111 in Starships stats) - it’s a fixer upper but he’ll do almost anything to to be in the stars again.",
      attributes: [
        {
          id: 1,
          name: "dexterity",
          baseValue: 3,
          pips: 1,
          skills: [
            { id: "sk01", name: "blaster", value: 1, baseValue: 3 },
            { id: "sk02", name: "brawling parry", value: 0, baseValue: 3 },
            { id: "sk03", name: "dodge", value: 1, baseValue: 3 },
            { id: "sk04", name: "grenade", value: 0, baseValue: 3 },
            { id: "sk05", name: "heavy weapons", value: 0, baseValue: 3 },
            { id: "sk06", name: "melee parry", value: 0, baseValue: 3 },
            { id: "sk07", name: "melee", value: 0, baseValue: 3 },
          ],
        },
        {
          id: 2,
          name: "knowledge",
          baseValue: 2,
          pips: 0,
          skills: [
            { id: "sk08", name: "alien races", value: 0, baseValue: 2 },
            { id: "sk09", name: "bureaucracy", value: 0, baseValue: 2 },
            { id: "sk10", name: "cultures", value: 0, baseValue: 2 },
            { id: "sk11", name: "languages", value: 0, baseValue: 2 },
            {
              id: "sk12",
              name: "planetary systems",
              value: 0,
              baseValue: 2,
            },
            { id: "sk13", name: "streetwise", value: 0, baseValue: 2 },
            { id: "sk14", name: "survival", value: 0, baseValue: 2 },
            { id: "sk15", name: "technology", value: 0, baseValue: 2 },
          ],
        },
        {
          id: 3,
          name: "mechanical",
          baseValue: 4,
          pips: 2,
          skills: [
            { id: "sk16", name: "astrogation", value: 0, baseValue: 4 },
            { id: "sk17", name: "beast riding", value: 0, baseValue: 4 },
            { id: "sk18", name: "repulsorlift op", value: 0, baseValue: 4 },
            {
              id: "sk19",
              name: "starship gunnery",
              value: 1,
              baseValue: 4,
            },
            {
              id: "sk20",
              name: "starship piloting",
              value: 3,
              baseValue: 4,
            },
            { id: "sk21", name: "starship shields", value: 1, baseValue: 4 },
          ],
        },
        {
          id: 4,
          name: "perception",
          baseValue: 3,
          pips: 0,
          skills: [
            { id: "sk22", name: "bargain", value: 0, baseValue: 3 },
            { id: "sk23", name: "command", value: 0, baseValue: 3 },
            { id: "sk24", name: "con", value: 0, baseValue: 3 },
            { id: "sk25", name: "gambling", value: 0, baseValue: 3 },
            { id: "sk26", name: "hide_sneak", value: 0, baseValue: 3 },
            { id: "sk27", name: "search", value: 0, baseValue: 3 },
          ],
        },
        {
          id: 5,
          name: "strength",
          baseValue: 2,
          pips: 0,
          skills: [
            { id: "sk28", name: "brawling", value: 0, baseValue: 2 },
            {
              id: "sk29",
              name: "climbing/jumping",
              value: 0,
              baseValue: 2,
            },
            { id: "sk30", name: "lifting", value: 0, baseValue: 2 },
            { id: "sk31", name: "stamina", value: 0, baseValue: 2 },
            { id: "sk32", name: "swimming", value: 0, baseValue: 2 },
          ],
        },
        {
          id: 6,
          name: "technical",
          baseValue: 3,
          pips: 0,
          skills: [
            {
              id: "sk33",
              name: "comp.prog/repair",
              value: 0,
              baseValue: 3,
            },
            { id: "sk34", name: "demolition", value: 0, baseValue: 3 },
            {
              id: "sk35",
              name: "droid prog/repair",
              value: 0,
              baseValue: 3,
            },
            { id: "sk36", name: "medicine", value: 0, baseValue: 3 },
            {
              id: "sk37",
              name: "repulsorlift repair",
              value: 0,
              baseValue: 3,
            },
            { id: "sk38", name: "security", value: 0, baseValue: 3 },
            { id: "sk39", name: "starship repair", value: 3, baseValue: 3 },
          ],
        },
      ],
      equipment: [
        {
          name: "Tactical Transport Hull Shard",
          description:
            "A fragment from the ship they flew during the Galactic Civil War, now a lucky charm.",
        },
        {
          name: "Blaster Pistol",
          description: "Reliable and well-used",
        },
        {
          name: "Flight Suit",
          description:
            "Weathered and patched, with remnants of Rebellion insignia.",
        },
        {
          name: "Tool Kit",
          description: "For minor starship repairs.",
        },
        {
          name: "Communicator",
          description: "Essential for staying in touch during mercenary work.",
        },
        {
          name: "1000 Credits",
          description: "A modest amount saved toward purchasing his own ship.",
        },
      ],
      attack: [
        {
          name: "Unarmed Attack",
          type: "Fists",
          range: "0",
          lookup: "sk28",
          damage: 2,
          extra: 0,
          special: "",
        },
        {
          name: "BlasTech DH-17",
          type: "Blaster Pistol",
          range: "5-15/30/120",
          lookup: "sk01",
          damage: 4,
          extra: 0,
          special: "+1D hit",
        },
      ],
      forceSensitive: false,
      forcePoints: 0,
      darkSidePoints: 0,
      woundStatus: "",
      skillPoints: 0,
    },
  ];
};
