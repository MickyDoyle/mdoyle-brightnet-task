/// This file is the entry point of the console application
// It fetches job and member data from an API, matches jobs to members based on their bios, and logs the results to the console.

import { matchJobs } from './comparer/matchJobs';
import { getJobs, getMembers } from './data/api';

async function main() {
  console.log('fetching remote data...');
  const [jobs, members] = await Promise.all([getJobs(), getMembers()]);
  console.log(`There are ${jobs.length} jobs and ${members.length} members\n\n`);

  const matches = matchJobs(members, jobs);

  matches.forEach((matches) => {
    console.log(`Member: ${matches.member.name} - ${matches.member.bio}`);

    if (matches.jobs.length === 0) {
      console.log('No matching jobs found.');
    } else {
      console.log('Matched Jobs:');
      matches.jobs.forEach((job) => {
        console.log(`- ${job.title} in ${job.location}`);
      });
    }
  });
}

main();
