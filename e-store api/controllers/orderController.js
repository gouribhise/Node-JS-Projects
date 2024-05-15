const Order=require('../models/Order')
const Product=require('../models/Product')
const {StatusCodes}=require('http-status-codes')
const CustomError =require('../errors')
const {checkPermissions}=require('../utils')
const createOrder=async(req,res)=>{
    const {items:cartItems,tax,shippingFee}=req.body
    if(!cartItems||cartItems.length<1){
        throw new CustomError.BadRequestError('No cart items provided')
    }
    if(!tax||!shippingFee){
        throw new CustomError.BadRequestError('Please provide tax and shipping fee.')
    }
    let orderItems=[]
    let subTotal=0
    for(const item of cartItems){
        const dbProduct=await Product.findOne({_id:item.product})
        if(!dbProduct){
            throw new CustomError.NotFoundError('no product with id')
        }
        const {name, price, image,_id}=dbProduct
        const singleOrderItem={
            amount:item.amount,
            name,price,image,product:_id
        }
        orderItems=[...orderItems,singleOrderItem]
        subTotal+=item.amount*price

    }
    res.send('create order')
 }

const getAllOrders=async(req,res)=>{
    res.send('get all orders')
}

const getSingleOrder=async(req,res)=>{
    res.send('get single order')
}

const getCurrentUserOrders=async(req,res)=>{
    res.send('get current users orders')
}

const updateOrder=async(req,res)=>{
    res.send('update order')
}
module.exports={
    getAllOrders,
    getSingleOrder,
    getCurrentUserOrders,
    createOrder,
    updateOrder
}