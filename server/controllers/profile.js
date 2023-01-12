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
    console.log("Request Body : ",req.body)
    const result = await Profile.create(req.body);
    res.status(201);
    res.send(result);
  } catch (error) {
    res.status(500);
    console.log(error);
  }
}


async function updateProfileData(req, res){
  try{
    console.log("Requested Id : ",req.params.id);
    const {id} = req.params
    Profile.updateOne({ _id: id}, req.body, function (err, result) {
      console.log("Error : ",err)
      res.send(
          (err !== null) ? {msg: 'Sorry! Couldnt Update The Data '} : {msg: 'Successfully Updated the Data'}
      );
  });
  }
  catch(x){
    console.log("Error : ",x)
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


module.exports = { getAllProfiles, postProfile, getsingleProfile, updateProfileData }