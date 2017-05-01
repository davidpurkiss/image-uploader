import { json } from "aurelia-fetch-client";
import { BaseService } from "./base";
import { ImageUploadConfig, Docs, Doc } from "../models";

export class ImageUploadConfigService extends BaseService {

    routePrefix: string;

    constructor() {
        super("image-upload-config");
        this.routePrefix = "image-upload-config";
    }

    async list(): Promise<Docs<ImageUploadConfig>> {

        let http = this.getHttp();

        let response = await http.fetch(this.routePrefix);
        let configs = await response.json();

        return configs;
    }

    async default(): Promise<Doc<ImageUploadConfig>> {

        let http = this.getHttp();

        let response = await http.fetch(`${this.routePrefix}/default`);
        let config = await response.json();

        return config;
    }

    async get(id: string): Promise<Doc<ImageUploadConfig>> {

        let http = this.getHttp();

        let response = await http.fetch(`${this.routePrefix}/${id}`);
        let config = await response.json();

        return config;

    }

    async getByKey(key: string): Promise<ImageUploadConfig> {

        let http = this.getHttp();

        let response = await http.fetch(`${this.routePrefix}/key/${key}`);
        let config: Doc<ImageUploadConfig> = await response.json();

        if (response.ok) {
            if (config)
                return config.value;
            else
                return undefined;
        }

        else
            throw response.statusText
    }

    async add(config: ImageUploadConfig): Promise<Doc<ImageUploadConfig>> {

        let http = this.getHttp();

        let response = await http.fetch(this.routePrefix, {
            method: "post",
            body: json(config)
        });

        return await response.json();

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