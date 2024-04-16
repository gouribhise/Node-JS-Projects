const getAllJobs=(req,res)=>{
    res.send('get all jobs')
}


const getJob=(req,res)=>{
    res.send('get single jobs')
}

const createJob=(req,res)=>{
    res.send('create a job')
}

const updateJob=(req,res)=>{
    res.send('Update job')
}

const deleteJob=(req,res)=>{
    res.send('Delete Job')
}



module.exports ={
    getAllJobs,getJob,createJob,updateJob,deleteJob
}