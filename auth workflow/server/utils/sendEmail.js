const nodemailer=require('nodemailer')
const nodemailerConfig=require('./nodemailerConfig')
const sendEmail=async({to,subject,html})=>{
    let testAccount=await nodemailer.createTestAccount()
    const transporter = nodemailer.createTransport(nodemailerConfig)
      
     


      const info = await transporter.sendMail({
        from: '"test101 👻" <test101@ethereal.email>', // sender address
     to,
     subject,
     html
      });
}

module.exports=sendEmail