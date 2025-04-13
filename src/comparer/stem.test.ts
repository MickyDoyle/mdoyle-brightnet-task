import { describe, it, expect } from '@jest/globals';
import { splitAndStemText, compareWordSets } from './stemAndCompare';

describe('the stem function', () => {
  it('should return design for designer', async () => {
    const word = 'UX Designer';
    const stemmedWord = splitAndStemText(word);
    expect(stemmedWord).toEqual(new Set(['ux', 'design']));
  });
});

describe('the compare sets function', () => {
  const score = (str1: string, str2: string) =>
    compareWordSets(splitAndStemText(str1), splitAndStemText(str2));

  it('should return 1 for matching job and member', () => {
    const job = 'UX designer';
    const member = "I'm a designer from London, UK";
    expect(score(job, member)).toBe(1);
  });

  it('should return 0 for non-matching job and member', () => {
    const job = 'Software Engineer';
    const member = 'Data Scientist';
    expect(score(job, member)).toBe(0);
  });

  it('should return 2 for matching job and member', () => {
    const job = 'Software Engineer';
    const member = 'Engineer Software';
    expect(score(job, member)).toBe(2);
  });
});
