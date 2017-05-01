import { json } from "aurelia-fetch-client";
import { BaseService } from "./base";
import { ImageUploadConfig, Docs, Doc, AspectRatio } from "../models";

export class ImageUploadConfigService extends BaseService {

    routePrefix: string;
    configs: ImageUploadConfig[];

    constructor() {
        super("image-upload-config");
        this.routePrefix = "image-upload-config";

        this.getDemoData();
    }




    getDemoData() {

        this.configs = [];

        this.configs.push({
            Id: "1",
            AspectRatio: AspectRatio.Four_to_Three,
            CompressionQuality: 70,
            CropOptions: { Center: false, Guides: false },
            Description: "4 : 3 Test with compression",
            EnableCompression: true,
            IncludeOriginalSize: true,
            Key: "test1",
            Sizes: [{ Height: 600, Width: 400, Key: "large" }, { Height: 300, Width: 200, Key: "medium" }],
            ViewMode: 2
        });

        this.configs.push({
            Id: "2",
            AspectRatio: AspectRatio.Sixteen_to_Nine,
            CompressionQuality: 70,
            CropOptions: { Center: false, Guides: false },
            Description: "16 : 9 Test with no compression",
            EnableCompression: false,
            IncludeOriginalSize: true,
            Key: "test2",
            Sizes: [{ Height: 600, Width: 400, Key: "large" }, { Height: 300, Width: 200, Key: "medium" }],
            ViewMode: 2
        });
    }

    async list(): Promise<Docs<ImageUploadConfig>> {

        let configs = this.configs;

        let docs = new Docs<ImageUploadConfig>(configs);

        return docs;
    }

    async default(): Promise<Doc<ImageUploadConfig>> {

        let config: ImageUploadConfig = {
            Id: "1",
            AspectRatio: AspectRatio.Four_to_Three,
            CompressionQuality: 70,
            CropOptions: { Center: false, Guides: false },
            Description: "4 : 3 Test with compression",
            EnableCompression: true,
            IncludeOriginalSize: true,
            Key: "test1",
            Sizes: [{ Height: 600, Width: 400, Key: "large" }, { Height: 300, Width: 200, Key: "medium" }],
            ViewMode: 2
        };

        return new Doc<ImageUploadConfig>(config);
    }

    async get(id: string): Promise<Doc<ImageUploadConfig>> {

        let config = this.configs.find(c => c.Id == id);

        return new Doc(config);

    }

    async getByKey(key: string): Promise<ImageUploadConfig> {

        let config = this.configs.find(c => c.Key == key);

        return config;
    }

    async add(config: ImageUploadConfig): Promise<Doc<ImageUploadConfig>> {

        this.configs.push(config);

        return new Doc(config);
    }

    async update(config: ImageUploadConfig) {

        let http = this.getHttp();

        let response = await http.fetch(`${this.routePrefix}/${config.Id}`, {
            method: "put",
            body: json(config)
        });

    }

    async delete(id: string) {

        let http = this.getHttp();

        let response = await http.fetch(`${this.routePrefix}/${id}`, {
            method: "delete"
        });

    }

}