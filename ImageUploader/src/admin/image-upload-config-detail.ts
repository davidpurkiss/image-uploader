import { autoinject } from 'aurelia-framework';
import { DialogController } from 'aurelia-dialog';
import { ImageUploadConfig, Size } from "../models";
@autoinject
export class ImageUploadConfigDetailViewModel {

    title: string;
    action: string;
    controller: DialogController;
    config: ImageUploadConfig;

    constructor(controller: DialogController) {
        this.controller = controller;
    }

    attached() {
        $(".ui.checkbox").checkbox();
    }

    activate(config: ImageUploadConfig) {

        if (!config) {
            this.config = new ImageUploadConfig();
            this.title = "Add Image Upload Config";
        }

        else {
            this.config = config;
            this.title = "Edit Image Upload Config";
        }

        this.action = "Save";
    }

    submit() {

        this.controller.ok(this.config);
    }

    cancel() {
        this.controller.cancel();
    }

    addSize(config: ImageUploadConfig){
        config.Sizes.push(new Size());
    }

    removeSize(config: ImageUploadConfig, size: Size){
        let index = config.Sizes.indexOf(size);
        config.Sizes.splice(index, 1);
    }
}