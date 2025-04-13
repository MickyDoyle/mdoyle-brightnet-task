// This file contains a function to compare the location mentioned in a bio with a given location.
// It uses regular expressions to identify specific phrases related to location.
// The function returns true if the location in the bio matches the given location, and false otherwise.
// The function is case-insensitive and handles various phrases like "outside of", "relocate to", and "in".

const outsideReg = /outside of (\w+)/;
const relocatingReg = /(relocate|relocating) to (\w+)/;
const inLocationReg = /(in|from) (london|york|manchester|edinburgh)/; // more cities exist

export const compareLocation = (bio: string, location: string): boolean => {
  const locationLower = location.toLowerCase();
  const bioLower = bio.toLowerCase();

  const isMatch = (reg: RegExp) => bioLower.match(reg)?.some((mtc) => mtc === locationLower);

  const outsideOfMatch = isMatch(outsideReg);

  if (outsideOfMatch !== undefined) return !outsideOfMatch;

  const relocatingMatch = isMatch(relocatingReg);
  if (relocatingMatch !== undefined) return relocatingMatch;

  const inLocationMatch = isMatch(inLocationReg);
  if (inLocationMatch !== undefined) return inLocationMatch;

  return true;
};
