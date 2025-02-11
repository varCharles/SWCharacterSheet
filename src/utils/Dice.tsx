export const rollSWD6WildDice = (numDice: number) => {
  if (numDice < 1) throw new Error("You must roll at least 1 die.");

  let total = 0;
  const rolls = [];
  let wildDie = 0;
  const wildDieBreakdown = [];

  for (let i = 0; i < numDice; i++) {
    const roll = Math.floor(Math.random() * 6) + 1;
    if (i === 0) {
      // Wild Die is always the first die
      wildDie = roll;
      wildDieBreakdown.push(roll);

      // Handle exploding Wild Die
      while (wildDie === 6) {
        total += wildDie; // Add the current 6 to total
        const extraRoll = Math.floor(Math.random() * 6) + 1;
        wildDieBreakdown.push(extraRoll);
        wildDie = extraRoll;
      }

      // If Wild Die rolls a 1, adjust behavior as needed
      if (wildDie === 1 && numDice > 1) {
        // Optional: Implement penalties for a Wild Die 1 based on house rules
        wildDieBreakdown.push("1 (Penalty)");
      } else {
        total += wildDie; // Add final Wild Die roll to total
      }
    } else {
      total += roll;
      rolls.push(roll);
    }
  }
  console.log("Total:", total);
  console.log("Dice Rolls:", rolls);
  console.log("Wild Die Breakdown:", wildDieBreakdown);
  return { total, rolls, wildDieBreakdown };
};

export const rollSWD6Dice = (numDice: number, pips: number) => {
  if (numDice < 1) throw new Error("You must roll at least 1 die.");

  let total = 0;
  const rolls = [];

  for (let i = 0; i < numDice; i++) {
    const roll = Math.floor(Math.random() * 6) + 1;
    total += roll;
    rolls.push(roll);
  }

  if (pips > 0) {
    total += pips;
    rolls.push(pips);
  }
  return { total, rolls };
};
