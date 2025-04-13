# Match members with jobs

## Technical Challenge - Bright Network

2025-04-13 - By Michael Doyle [email](mailto:mdoyle@mdoyle.org) | [linkedin](https://www.linkedin.com/in/mdoyle/)

This is a simple TypeScript console application that loads JSON from the two url's provided and prints out members and the their job matches.

the challenge is described [here](./challenge.md).

these are the results I get when i run the program:

```
Member: Joe - I'm a designer from London, UK
Matched Jobs:
- UX Designer in London
Member: Marta - I'm looking for an internship in London
Matched Jobs:
- Legal Internship in London
- Sales Internship in London
Member: Hassan - I'm looking for a design job
Matched Jobs:
- UX Designer in London
Member: Grace - I'm looking for a job in marketing outside of London
Matched Jobs:
- Marketing Internship in York
Member: Daisy - I'm a software developer currently in Edinburgh but looking to relocate to London
Matched Jobs:
- Software Developer in London

```

### Setup and run

in a console type:

```bash
git clone https://github.com/MickyDoyle/mdoyle-brightnet-task
cd mdoyle-brightnet-task/
npm install
npm run build
npm start
```

### About

this was a fun little project; I enjoying thinking about processing natural text which i had not done in a work context before.

I decided not to spend too much time making a generic/perfect solution or in learning language processing tools.

Instead i tried to implement just enough to pass this specific use-case and also to layout the logic so that better matching could be added later.

For location matching i used some regex's to look for the various phrases I saw in the provided data (see [compareLocation.ts](src/comparer/compareLocation.ts)).

To match applicants with job-title i split each bio and title into words and then used a library i found online [porter-stemming](https://github.com/maxpatiiuk/porter-stemming) to "stem" the words e.g. `designer=>design`; then looked for 1-or-more matches between the two sets. (see [stemAndCompare.ts](./src/comparer/stemAndCompare.ts))

I combined these functions to make a function that takes the two input arrays and returns a list of matches (see [matchJobs.ts](./src/comparer/matchJobs.ts))

finally there's a "main" program file [index.ts](./src/index.ts) which fetches the data, compares it and prints the results.

there are jest tests fot the various components.
