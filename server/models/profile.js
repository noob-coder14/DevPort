// const { model } = require('mongoose');
const mongoose = require('mongoose')

const basicInfoSchema = mongoose.Schema({
  fullname: String,
  email: String,
  careerObj: String,
  // pphoto: String,
  // skillsData: [
  //   {
  //     name:String
  //   }
  // ]
  skillsData: [String]
})

const userAccInfoSchema = mongoose.Schema({
  githubLink: String,
  soLink: String,
  leetcodeLink: String
})

const educationSchema = mongoose.Schema({
  eduLevel1: String,
  instName1: String,
  eduDescription1: String,

  eduLevel2: String,
  instName2: String,
  eduDescription2: String,

  eduLevel3: String,
  instName3: String,
  eduDescription3: String
})

const experienceSchema = mongoose.Schema({
  companyName1: String,
  jobRole1: String,
  jobDescription1: String,

  companyName2: String,
  jobRole2: String,
  jobDescription2: String,

  companyName3: String,
  jobRole3: String,
  jobDescription3: String
})

const projectSchema = mongoose.Schema({
  projectTitle1: String,
  demovideo1: String,
  projectDescription1: String,

  projectTitle2: String,
  demovideo2: String,
  projectDescription2: String,

  projectTitle3: String,
  demovideo3: String,
  projectDescription3: String
})

const profileSchema = mongoose.Schema({
  basicInfo: basicInfoSchema,
  userAccInfo: userAccInfoSchema,
  education:educationSchema,
  experiences: experienceSchema,
  projects: projectSchema
})

const Profile = mongoose.model('Profile', profileSchema);


module.exports = Profile;