import { customElement, autoinject, bindable, bindingMode } from "aurelia-framework";
import { EventAggregator } from "aurelia-event-aggregator";
import { Events, Globals } from "../../globals";
import { ImageUploadConfig, AspectRatio } from "../../models";
import * as Cropper from 'cropperjs'

@customElement("image-uploader")
@autoinject
export class ImageUploaderCustomElement {

    dropZone: HTMLElement;
    fileInput: HTMLElement;

    boundDragOver: any;
    boundDragLeave: any;
    boundDrop: any;
    boundFileSelected: any;

    isDragOver: boolean;
    isUnsupported: boolean
    isDrop: boolean;
    isLoading: boolean;

    style: any;

    hasImage: boolean;
    image: any;

    @bindable cropperCreated: (cropper) => {};
    @bindable config: ImageUploadConfig;
    cropper: Cropper;

    dragMode: string = "crop";
    scaleX: number = -1;
    scaleY: number = 1;

    constructor() {
        this.boundDragOver = this.dragOver.bind(this);
        this.boundDragLeave = this.dragLeave.bind(this);
        this.boundDrop = this.drop.bind(this);
        this.boundFileSelected = this.fileSelected.bind(this);

        this.refresh();
    }

    attached() {

        this.dropZone.addEventListener("dragover", this.boundDragOver, false);
        this.dropZone.addEventListener("dragleave", this.boundDragLeave, false);
        this.dropZone.addEventListener("drop", this.boundDrop, false);

        this.fileInput.onchange = this.boundFileSelected;
    }

    refresh() {
        this.refreshStyle();
    }

    refreshStyle() {
        this.style = {
            height: '300px'
        }
    }

    dragOver(e) {

        e.stopPropagation();
        e.preventDefault();

        if (this.hasImageFile(e.dataTransfer.items))
            this.isDragOver = true;
        else
            this.isUnsupported = true;
    }

    dragLeave(e) {

        e.stopPropagation();
        e.preventDefault();

        this.isDragOver = false;
        this.isUnsupported = false;
    }

    drop(e) {
        e.stopPropagation();
        e.preventDefault();

        this.isDragOver = false;

        this.cropFiles(e.dataTransfer.files);

    }

    hasImageFile(files: any[]): boolean {

        if (files && files.length > 0) {
            for (let i = 0; i < files.length; i++) {
                if (files[i].type.indexOf("image") == 0)
                    return true;
            }
        }

        return false;
    }

    cropFiles(files) {
        if (this.hasImageFile(files)) {
            this.isLoading = true;
            this.isDrop = true;

            if (this.cropper)
                this.cropper.destroy();

            let file = files[0];

            let reader = new FileReader();
            this.hasImage = true;
            let self = this;
            reader.onload = function (re) {
                self.image.src = (<any>re.target).result;
                self.isLoading = false;
                self.cropper = new Cropper(self.image, {
                    aspectRatio: self.getAspectRatio(self.config.AspectRatio),
                    viewMode: self.config.ViewMode,
                    guides: self.config.CropOptions.Guides,
                    center: self.config.CropOptions.Center
                });

                self.cropperCreated({ cropper: self.cropper });
            }
            reader.readAsDataURL(file);
        }
    }

    getAspectRatio(aspectRatio: AspectRatio): number {

        if (aspectRatio == AspectRatio.Four_to_Three)
            return 4 / 3;
        else if (aspectRatio == AspectRatio.One_to_One)
            return 1;
        else if (aspectRatio == AspectRatio.Sixteen_to_Nine)
            return 16 / 9;
        else if (aspectRatio == AspectRatio.Two_to_Three)
            return 2 / 3;
        else
            return NaN;
    }

    browse() {

        $(this.fileInput).trigger('click');

    }

    fileSelected() {

        this.cropFiles((<any>this.fileInput).files);
    }

    rotateCounterClockwise() {
        this.cropper.rotate(-90);
    }

    rotateClockwise() {
        this.cropper.rotate(90);
    }

    flipHorizontal() {

        this.cropper.scaleX(this.scaleX);

        this.scaleX *= -1;
    }

    flipVertical() {

        this.cropper.scaleY(this.scaleY);

        this.scaleY *= -1;
    }

    toggleDragMode() {

        if (this.dragMode == "crop")
            this.dragMode = "move";
        else if (this.dragMode == "move")
            this.dragMode = "crop";

        this.cropper.setDragMode(this.dragMode);
    }

}