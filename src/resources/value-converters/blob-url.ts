import { Blob } from "../../models";

export class BlobUrlValueConverter {

    toView(value: Blob[], key: string, subKey: string) {

        if (!value)
            return undefined;

        let blob = value.find(b => b.Key == key && b.SubKey == subKey);

        if (!blob)
            return undefined;

        return blob.Url;
    }
}