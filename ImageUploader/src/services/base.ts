import { HttpClient } from "aurelia-fetch-client";

export class BaseService {

    rootUrl: string;

    constructor(rootUrl: string){
        this.rootUrl = rootUrl;
    }

    getHttp(): HttpClient {

        let http = new HttpClient();
        http.configure(config => {

            config.withBaseUrl("/api/");

        });

        return http;

    }

}