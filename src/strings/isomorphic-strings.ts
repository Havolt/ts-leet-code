function isIsomorphic(s: string, t: string): boolean {
  if (s.length !== t.length) return false;

  type StringMap = {
    [key: string]: number;
  };

  const sMap: StringMap = {};
  const tMap: StringMap = {};
  const sSums: StringMap = {};
  const tSums: StringMap = {};

  // Get a list of the amount of times each letter appears
  for (let i = 0; i < s.length; i++) {
    const sCount = sMap[s[i]] || 0;
    const tCount = tMap[t[i]] || 0;

    sMap[s[i]] = sCount + 1;
    tMap[t[i]] = tCount + 1;
  }

  // Count of different letters in string s
  for (let mapKey in sMap) {
    const mapValue = sMap[mapKey];
    const sumTotalCount = sSums[mapValue] || 0;
    sSums[mapValue] = sumTotalCount + 1;
  }
  // Count of different letters in string t
  for (let mapKey in tMap) {
    const mapValue = tMap[mapKey];
    const sumTotalCount = tSums[mapValue] || 0;
    tSums[mapValue] = sumTotalCount + 1;
  }

  for (let sSumKey in sSums) {
    if (sSums[sSumKey] !== tSums[sSumKey]) {
      console.log("nope");
      return false;
    }
  }

  console.log({ sSums });
  console.log({ tSums });

  console.log("yup");

  return true;
}

isIsomorphic("eggrr", "addvv");
