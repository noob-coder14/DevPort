// const { model } = require('mongoose');
const mongoose = require('mongoose')

const educationSchema = mongoose.Schema({
  eduLevel: String,
  instName: String,
  eduDescription: String
})

const experienceSchema = mongoose.Schema({
  companyName: String,
  jobRole: String,
  tags: [String],
  jobDescription: String
})

const projectSchema = mongoose.Schema({
  projectTitle: String,
  imggallery: [String],
  tags: [String],
  projectDescription: String
})

const profileSchema = mongoose.Schema({
  fullname: String,
  email: String,
  careerObj: String,
  pphoto: String,

  githubLink: String,
  soLink: String,
  leetcodeLink: String,

  educations:[educationSchema],

  experiences: [experienceSchema],

  projects: [projectSchema]
})

const Profile = mongoose.model('Profile', profileSchema);


module.exports = Profile;