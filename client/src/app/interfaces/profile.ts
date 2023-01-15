export interface profile {
  basicInfo: basicInfo;
  userAccInfo: userAccInfo;
  education: education;
  experiences: experiences;
  projects: projects;
}

interface basicInfo {
  fullname: string;
  email: string;
  careerObj: string;
  skills: [string];
  // pphoto: string;
}

interface userAccInfo {
  githubLink: string;
  soLink: string;
  leetcodeLink: string;
}

interface education {
  eduLevel1: string;
  instName1: string;
  eduDescription1: string;

  eduLevel2: string;
  instName2: string;
  eduDescription2: string;

  eduLevel3: string;
  instName3: string;
  eduDescription3: string;
}

interface experiences {
  companyName1: string;
  jobRole1: string;
  jobDescription1: string;

  companyName2: string;
  jobRole2: string;
  jobDescription2: string;

  companyName3: string;
  jobRole3: string;
  jobDescription3: string;
}

interface projects {
  projectTitle1: string;
  demovideo1: string;
  projectDescription1: string;

  projectTitle2: string;
  demovideo2: string;
  projectDescription2: string;

  projectTitle3: string;
  demovideo3: string;
  projectDescription3: string;
}
