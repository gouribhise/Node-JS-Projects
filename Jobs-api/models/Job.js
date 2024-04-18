const mongoose=require('mongoose')
const JobSchema=new mongoose.Schema({
    company:{
        type:String,
        requried:[true,'plase provide company name'],
        maxLength:40
    },
    position:{
        type:String,
        requried:[true,'plase provide position'],
        maxLength:100
    },
    status:{
        type:String,
        enum:['intever','declined','pending'],
        default:'pending'
    },
    createdBy:{
        type:mongoose.Types.ObjectId,
        ref:'User',
        required:[true,'Please provide user']
    }
},{
    timestamps:true
})

module.exports=mongoose.model('Job',JobSchema)