import {FrameworkConfiguration} from 'aurelia-framework';
import { SemanticModalRenderer } from './elements/semanticRenderer';
import { DialogConfiguration } from 'aurelia-dialog';

export function configure(config: FrameworkConfiguration) {
   config.globalResources([
    "./elements/semanticRenderer",
    "./elements/image-uploader",
    "./elements/image-upload",
    "./value-converters/blob-url"
  ]);

  //Dialogs
  config.plugin('aurelia-dialog', (config: DialogConfiguration) => {
    config
      .useRenderer(SemanticModalRenderer)
      .useStandardResources();
  });
}
