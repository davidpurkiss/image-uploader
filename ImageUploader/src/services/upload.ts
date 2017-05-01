import { json } from "aurelia-fetch-client";
import { BaseService } from "./base";
import { ImageUpload, Blob } from "../models";

export class UploadService extends BaseService {

    constructor() {
        super("upload/");
    }

    async uploadImage(container: string, key: string, imageUpload: ImageUpload): Promise<Blob[]> {

        let http = this.getHttp();

        let response = await http.fetch(`${this.rootUrl}image/${container}/${key}`,
            {
                method: "post",
                body: json(imageUpload)
            });

        if (response.ok) {
            let blobs = await response.json();
            return blobs;
        }

        throw response.statusText;
    }

    async removeBlobs(container: string, blobs: Blob[]) {

        let http = this.getHttp();

        let response = await http.fetch(`${this.rootUrl}${container}`,
            {
                method: "delete",
                body: json(blobs)
            });
    }
}