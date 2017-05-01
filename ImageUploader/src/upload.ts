import { autoinject } from 'aurelia-framework';
import { UploadService, ImageUploadConfigService } from "./services";
import { ImageUploadConfig, ImageUpload, Doc, Blob } from "./models";

@autoinject
export class UploadViewModel {

    upload: UploadService;
    uploadConfigService: ImageUploadConfigService;

    uploadConfig: ImageUploadConfig;

    constructor(
        upload: UploadService,
        uploadConfigService: ImageUploadConfigService) {

        this.upload = upload;
        this.uploadConfigService = uploadConfigService;
    }

    async attached() {
        this.uploadConfig = await this.uploadConfigService.getByKey("test1");
    }
}