// This file contains a function to match jobs to members based on their bios.
// It uses stemming and word comparison to find relevant jobs for each member.
// The function takes an array of members and an array of jobs as input and returns an array of matches.

import { Job } from '../types/jobs';
import { Member } from '../types/member';
import { compareLocation } from './compareLocation';
import { compareWordSets, splitAndStemText } from './stemAndCompare';

export const matchJobs = (members: Member[], jobs: Job[]): { member: Member; jobs: Job[] }[] => {
  const stemmedJobs = jobs.map((job) => ({ stems: splitAndStemText(job.title), job }));
  const memberMatches = members.map((member) => {
    const bioStem = splitAndStemText(member.bio);
    const matches = stemmedJobs.filter(({ stems, job }) => {
      if (!compareLocation(member.bio, job.location)) return false;
      const matchCount = compareWordSets(stems, bioStem);
      return matchCount > 0;
    });
    return { member, jobs: matches.map(({ job }) => job) };
  });
  return memberMatches;
};
