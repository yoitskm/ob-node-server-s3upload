require('dotenv').config();

const S3 = require('aws-sdk/clients/s3');
const moment = require('moment');
const express = require('express')
const fileUpload = require('express-fileupload');

const app = express()
 
app.use(fileUpload({
    limits: { fileSize: 50 * 1024 * 1024 },
}));

const s3 = new S3({
    accessKeyId: process.env.ACCESS_ID,
    secretAccessKey: process.env.ACCESS_KEY,
    endpoint: 'your_vultr_object_storage_endpoint_url'
});


app.get('/info', function (req, res) {
  res.send({
      status:true,
      version: "1.0.0",
      name:"s3_upload_express_server for vultr"
  })
});
 
app.post('/upload', async (req, res) => {
  
    uploadRequestFile(req,res);
});
 
  







const uploadRequestFile = async (req,res) => {
    
    
  

    // s3 upload config params
    const params = {
        Bucket: process.env.BUCKET,
        Key:  `${process.env.BUCKET_PATH}/${moment().unix()}_${req.files.file.name}`, // file name with timestamp
        Body: req.files.file.data,
        ACL:'public-read', // public read policy
        ContentType:req.files.file.mimetype

    };

    // Uploading files to the bucket
    s3.upload(params, (err, data) => {
        if (err) {
            res.json({
                status: false,
                'error':err
            });
        }

        console.log(`Video File uploaded successfully. ${data.Location}`);

        res.json({
            status: true,
            video_url:data.Location        
        });

 


    });
};


app.listen(process.env.PORT);
console.log("Server started at ===>  ", process.env.PORT)