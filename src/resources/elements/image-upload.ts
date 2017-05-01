import { customElement, autoinject, bindable, bindingMode } from "aurelia-framework";
import { EventAggregator } from "aurelia-event-aggregator";
import { Events, Globals } from "../../globals";
import { DialogService, DialogResult } from 'aurelia-dialog';
import { ImageUploadConfig } from "../../models";

@autoinject
@customElement("image-upload")
export class ImageUploadComponent {

    @bindable src: string;
    @bindable({ defaultBindingMode: bindingMode.twoWay }) uploadSrc: string;
    @bindable size: string;
    @bindable config: ImageUploadConfig;

    dialog: DialogService;

    noSrc: string = "content/images/image-place-holder.png";

    constructor(dialog: DialogService) {
        this.dialog = dialog;
    }

    attached() {

        if (!this.src)
            this.src = this.noSrc;
    }

    async uploadImage() {
        let result = await this.dialog.open({
            viewModel: `resources/elements/image-upload-dialog`, model: this.config
        });
        if (!result.wasCancelled && result.output) {
            this.src = result.output;
            this.uploadSrc = result.output;
        }
    }
}