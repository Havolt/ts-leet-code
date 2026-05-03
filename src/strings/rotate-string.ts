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

  for (let i = 0; i < goalSplit.length; i++) {
    if (goalSplit[i] === initSplit[0]) {
      firstLetterLocationGoal.push(i);
    }
  }

  console.log({ firstLetterLocationGoal });

  return true;
}

rotateString("abcde", "cdeab");
