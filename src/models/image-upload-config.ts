export class ImageUploadConfig {

    Id: string;
    Key: string;
    Description: string;
    AspectRatio: AspectRatio;
    ViewMode: number;
    IncludeOriginalSize: boolean;
    Sizes: Size[];
    CropOptions: CropOptions;
    EnableCompression: boolean;
    CompressionQuality: number;
}

export class CropOptions {
    Guides: boolean;
    Center: boolean;
}

export class Size {
    Width: number;
    Height: number;
    Key: string;
} 

export enum AspectRatio {
        Sixteen_to_Nine,
        Four_to_Three,
        One_to_One,
        Two_to_Three,
        Free
}