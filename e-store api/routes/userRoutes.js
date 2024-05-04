const express=require('express')
const router=express.Router()
const{ getAllUsers,
    getSingleUser,
    showCurrentUser,
    updateUser,
    updateUserPassword}=require('../controllers/userControllers')

router.route('/').get(getAllUsers);
router.route('/updateUser').post(updateUser)
router.route('/updatePassword').post(updateUserPassword)
router.route('/:id').get(getSingleUser)

module.exports=router