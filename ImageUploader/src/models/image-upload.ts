import { ImageUploadConfig } from "./image-upload-config";

export class ImageUpload {

     Content: string;
     Config: ImageUploadConfig;

     constructor(content:string, config: ImageUploadConfig){
         this.Content = content;
         this.Config = config;
     }
}