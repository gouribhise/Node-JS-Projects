const express=require('express')
const router=express.Router()
const {authenticateUser,authorizePermissions}=require('../middleware/authentication')
const{ getAllUsers,
    getSingleUser,
    showCurrentUser,
    updateUser,
    updateUserPassword}=require('../controllers/userControllers')

router.route('/').get(authenticateUser,authorizePermissions,getAllUsers);
router.route('/updateUser').post(updateUser)
router.route('/updatePassword').post(updateUserPassword)
router.route('/:id').get(authenticateUser,getSingleUser)

module.exports=router