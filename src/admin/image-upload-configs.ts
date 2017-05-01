import { autoinject } from "aurelia-framework";
import { ImageUploadConfigService } from "../services/image-upload-config-demo";
import { ImageUploadConfig } from "../models";
import { DialogService, DialogResult } from 'aurelia-dialog';

@autoinject
export class ImageUploadConfigsViewModel {

    service: ImageUploadConfigService;
    configs: ImageUploadConfig[];
    currentConfig: ImageUploadConfig;
    dialog: DialogService;

    isRefreshing: boolean;

    constructor(service: ImageUploadConfigService, dialog: DialogService) {
        this.service = service;
        this.dialog = dialog;
    }

    attached() {
        $(".ui.checkbox").checkbox();

        this.refresh();
    }

    async refresh() {

        this.isRefreshing = true;

        try {
            let docs = await this.service.list();
            this.configs = docs.Values.map(v => v.value);
        }
        finally {
            this.isRefreshing = false;
        }

    }

    async add() {

        let defaultConfig = (await this.service.default()).value;

        let result = await this.dialog.open({
            viewModel: `admin/image-upload-config-detail`, model: defaultConfig
        });

        if (!result.wasCancelled) {

            let config = await this.service.add(result.output);
            this.configs.push(config.value);
        }

    }

    async edit(config: ImageUploadConfig) {
        let result = await this.dialog.open({
            viewModel: `admin/image-upload-config-detail`, model: config
        });

        if (!result.wasCancelled) {
            await this.service.update(result.output);
        }
    }

    async remove(config: ImageUploadConfig) {

        let result = await this.dialog.open({
            viewModel: `base/dialogs/confirm-remove`, model: {
                title: "Confirm Remove Image Upload Config",
                prompt: "Are you sure want to remove the config '" + config.Key + " ?"
            }
        });

        if (!result.wasCancelled) {

            await this.service.delete(config.Id);

            let index = this.configs.indexOf(config);
            this.configs.splice(index, 1);
        }

    }

    select(config: ImageUploadConfig) {

        this.currentConfig = config;
        this.refresh();

    }

}