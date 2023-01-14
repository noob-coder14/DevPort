const router = require('express').Router();
const profileController = require('./controllers/profile');
const userController = require('./controllers/user')

router.get('/dashboard', profileController.getAllProfiles)
router.post('/dashboard', profileController.postProfile)
router.get('/dashboard/:id', profileController.getsingleProfile)
router.put('/dashboard/:id', profileController.updateProfileData)
router.post('/register', userController.postUser)
router.post('/login', userController.loginUser)
// router.put('/todos/:id/done', taskController.taskDone);

module.exports = router;