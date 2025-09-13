import {v2 as cloudinary} from cloudinary;
import fs from fs;
cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_KEY_NAME, 
  api_key:process.env.CLOUDINARY_API_KEY , 
  api_secret:process.env.CLOUDINARY_API_SECRET 
});

const uploadOnCloudinary = async (localFilePath) => {
    try {
        if(!localFilePath) return null
        const response= await cloudinary.uploader.upload(localFilePath,{
            resource_type:"auto"
        })
        //file has been uploaded succssfully
        console.log("Uploaded Successfullly",response.url)
        return response;
    } catch (error) {
        fs.unlinkSync(localFilePath)
        return null;
    }
}

// const uploadOlympicFlag = async () => {
//     const imageUrl = 'https://upload.wikimedia.org/wikipedia/commons/1/1e/Olympic_flag.jpg';
//     const result = await cloudinary.uploader.upload(imageUrl, { public_id: 'olympic_flag' });
//     return result;
// };

export { uploadOnCloudinary };
