/// This file contains functions to stem a string and compare sets of words.
import { stem } from 'porterstem';

export const splitAndStemText = (text: string): Set<String> => {
  const words = text.toLowerCase().split(/\s+/);
  const stemmedWords = words.map((word) => stem(word));
  return new Set(stemmedWords);
};

export const compareWordSets = (set1: Set<String>, set2: Set<String>): number => {
  let matchCount = 0;
  set1.forEach((word) => {
    if (set2.has(word)) {
      matchCount++;
    }
  });
  return matchCount;
};
