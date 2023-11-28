const express=require('express')
const productController=require('../Controllers/productController')
const userController=require('../Controllers/userController')
const router=new express.Router()

//allproduct
router.get('/products/all',productController.getAllProductController)
//view product
router.get('/products/view/:id',productController.getAProductController)
//register
router.post('/user/register',userController.registerController)

module.exports=router

