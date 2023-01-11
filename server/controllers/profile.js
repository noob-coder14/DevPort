const Profile = require("../models/profile");

async function getAllProfiles(req, res) {
  try {
    const profiles = await Profile.find();
    res.status(200);
    res.send(profiles);
  } catch (error) {
    res.status(500);
    console.log(error);
  }
}


async function getsingleProfile(req, res) {
  try {
    const {id} = req.params
    const profile = await Profile.findById(id);
    res.status(200);
    res.send(profile);
  } catch (error) {
    res.status(500);
    console.log(error);
  }
}


async function postProfile(req, res) {
  try {
    // const { fullname,email,careerObj } = req.body;
    // const result = await Profile.create({ fullname,email,careerObj });
    const result = await Profile.create(req.body);
    res.status(201);
    res.send(result);
  } catch (error) {
    res.status(500);
    console.log(error);
  }
}

// async function deleteTask(req, res) {
//   try {
//     const { id } = req.params
//     const result = await Task.findByIdAndDelete(id);
//     res.status(200);
//     res.send(result);
//   } catch (error) {
//     res.status(500);
//     console.log(error);
//   }
// }


// async function taskDone(req, res) {
//   try {
//     const { id } = req.params
//     const result = await Task.findByIdAndUpdate(id, {$set: {done: true}});
//     res.status(200);
//     res.send(result);
//   } catch (error) {
//     res.status(500);
//     console.log(error);
//   }
// }


module.exports = { getAllProfiles, postProfile, getsingleProfile }