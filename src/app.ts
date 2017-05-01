import "semantic-ui";
import { Router } from "aurelia-router";

export class App {

  router: Router;

  configureRouter(config, router) {
    this.router = router;
    config.title = 'Image Uploader';
    config.map([
      { route: ['', 'upload'], name: 'upload', moduleId: 'upload' },
      { route: 'admin/image-upload-configs', name: 'image-upload-configs', moduleId: 'admin/image-upload-configs' },
      { route: 'admin/gallery', name: 'gallery', moduleId: 'admin/gallery' }
    ]);
  }
}
