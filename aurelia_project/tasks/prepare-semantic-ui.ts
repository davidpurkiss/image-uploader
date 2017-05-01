import * as gulp from 'gulp';
import * as merge from 'merge-stream';
import * as changedInPlace from 'gulp-changed-in-place';
import * as path from 'path';
import * as project from '../aurelia.json';

export default function prepareSemanticUI() {

  let source = 'node_modules/semantic-ui';

  let themeName = "default";

  let taskCss = gulp.src(path.join(source, 'dist/semantic.min.css'))
    .pipe(changedInPlace({firstPass:true}))
    .pipe(gulp.dest(path.join(project.platform.output, 'css')));

  let taskFonts = gulp.src(path.join(source, 'dist/themes/' + themeName + '/assets/fonts/*'))
    .pipe(changedInPlace({firstPass:true}))
    .pipe(gulp.dest(path.join(project.platform.output, 'css/themes/' + themeName + '/assets/fonts')));

    let taskImages = gulp.src(path.join(source, 'dist/themes/' + themeName + '/assets/images/*'))
    .pipe(changedInPlace({firstPass:true}))
    .pipe(gulp.dest(path.join(project.platform.output, 'css/themes/' + themeName + '/assets/images')));

  return merge(taskCss, taskFonts, taskImages);
}