import { v2 as cloundinary } from "cloudinary";

const connectCloudinary = async () => {
  cloundinary.config({
    cloud_name: process.env.CLOUDINARYNAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  });
  console.log("Cloudinary connected successfully");
};

export default connectCloudinary;
