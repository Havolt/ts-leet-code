function rotateString(s: string, goal: string): boolean {
  const initSplit = s.split("");
  const goalSplit = goal.split("");

  if (initSplit.length !== goalSplit.length) {
    return false;
  }

  if (goal.length === 0) {
    return true;
  }

  const firstLetterLocationGoal = [];

  for (let i = 0; i < initSplit.length; i++) {
    if (initSplit[i] === goalSplit[0]) {
      firstLetterLocationGoal.push(i);
    }
  }

  for (let i = 0; i < firstLetterLocationGoal.length; i++) {
    const position = firstLetterLocationGoal[i];

    const newArr = initSplit
      .slice(position)
      .concat(initSplit.slice(0, position));

    if (newArr.join("") === goal) {
      return true;
    }
    console.log({ position });
  }

  console.log({ firstLetterLocationGoal });

  return false;
}

rotateString("abcde", "cdeab");
