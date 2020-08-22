# ob-node-express-s3upload
express server to upload multimedia files to any s3 compatible object storage solution through an API

# What it does

- simple rest api endpoint
- connect to any s3 compatible object storage like : 
  - aws s3
  - minio
  - vultr object storage
  - any s3 compatible cloud solution
- express server
- dotenv setup for easy development
- single file code

# Prerequisite

- create s3 access_id and access_key
- node 

# How to run

```
git clone https://github.com/aTonae/ob-node-express-s3upload.git
cd ob-node-express-s3upload

//update credentials in .env file

npm start
```

# Verify if running


```
//run
curl http://localhost:PORT/info

//output
{
      status:true,
      version: "1.0.0",
      name:"s3_upload_express_server"
}
```

# Use Docker for server

```
docker build -t node-express-s3upload .
docker run node-express-s3upload
```

# Upcoming features

- Dockerfile to run as docker
- Testing support
- GET, LIST and DELETE object support
- thumbnail generator
- watermarking

# Feedback

[Contact me](kmagrawal.13@gmail.com)

