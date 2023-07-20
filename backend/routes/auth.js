require('dotenv').config();
const express = require('express');
const cloudinary = require('cloudinary').v2;


cloudinary.config({
    cloud_name: process.env.cloud_name,
    api_key: process.env.api_key,
    api_secret: process.env.api_secret
});


const authRoute = express.Router();


authRoute.post('/upload', async (request, response) => {
    const file = request.files.image;

    try {
        cloudinary.uploader.upload(file.tempFilePath, async (error, result) => {
            if (error) {
                response.send({
                    'error': `Cannot able to upload the image: ${error}`
                });
            } else {
                response.send({
                    'message': 'image successfully uploaded on cloudinary',
                    'data': result.url
                })
            }
        })
    } catch (error) {
        
    }
});



module.exports = { authRoute };