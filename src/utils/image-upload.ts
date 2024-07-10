import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: import.meta.env.CLOUDINARY_CLOUD_NAME,
  api_key: import.meta.env.CLOUDINARY_API_KEY,
  api_secret: import.meta.env.CLOUDINARY_API_SECRET,
});

export class ImageUpload {
  static async upload(file: File) {
    try {
      const buffer = await file.arrayBuffer();
      const base64Image = Buffer.from(buffer).toString('base64');
      const imageType = file.type.split('/')[1]; // image/png

      const resp = await cloudinary.uploader.upload(
        `data:image/${imageType};base64,${base64Image}`
      );

      return resp.secure_url;
    } catch (error) {
      console.log(error);
      throw new Error(JSON.stringify(error));
    }
  }

  static async delete(image: string) {
    try {
      const imageName = image.split('/').pop() ?? '';
      const imageId = imageName.split('.')[0];

      const resp = await cloudinary.uploader.destroy(imageId);
      console.log('🚀 ~ ImageUpload ~ delete ~ resp:', resp);

      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }
}
