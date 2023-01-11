export interface profile {
    "fullname": String,
    "email": String,
    "careerObj": String,
    "pphoto": String,

    "githubLink": String,
    "soLink": String,
    "leetcodeLink": String,

    "education": education,

    "experiences": experiences,

    "projects": projects
}

interface education {
    "eduLevel1": String,
    "instName1": String,
    "eduDescription1": String,

    "eduLevel2": String,
    "instName2": String,
    "eduDescription2": String

    "eduLevel3": String,
    "instName3": String,
    "eduDescription3": String
}

interface experiences {
    companyName1: String,
      jobRole1: String,
      jobDescription1: String,

      companyName2: String,
      jobRole2: String,
      jobDescription2: String,

      companyName3: String,
      jobRole3: String,
      jobDescription3: String
}

interface projects {
    projectTitle1: String,
      demovideo1: String,
      projectDescription1: String,

      projectTitle2: String,
      demovideo2: String,
      projectDescription2: String,

      projectTitle3: String,
      demovideo3: String,
      projectDescription3: String
}