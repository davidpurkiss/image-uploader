import { autoinject } from 'aurelia-framework';
import { DialogController } from 'aurelia-dialog';
import { ImageUploadConfig } from "../../models";

@autoinject
export class ImageUploadDialogViewModel {

    controller: DialogController;

    cropper: any;

    config: ImageUploadConfig;

    constructor(controller: DialogController) {
        this.controller = controller;
    }

    attached() {
    }

    activate(config: ImageUploadConfig) {
        this.config = config;
    }

    cropperCreated(cropper) {
        this.cropper = cropper;
    }

    ok() {

        let croppedCanvas = undefined;
        if (this.cropper)
            croppedCanvas = this.cropper.getCroppedCanvas().toDataURL();

        this.controller.ok(croppedCanvas);
    }

    cancel() {
        this.controller.cancel();
    }
}