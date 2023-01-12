const router = require('express').Router();
const profileController = require('./controllers/profile');

router.get('/dashboard', profileController.getAllProfiles)
router.post('/dashboard', profileController.postProfile)
router.get('/dashboard/:id', profileController.getsingleProfile)
router.put('/dashboard/:id', profileController.updateProfileData)
// router.put('/todos/:id/done', taskController.taskDone);

module.exports = router;