const path = require('path');

const gulp = require('gulp');
const ts = require('gulp-typescript');
const gulpSequence = require('gulp-sequence');

const del = require('del');

const distIndex = process.argv.indexOf('--dist');
const dist = distIndex < 0 ? 'node_modules/@garnish' : process.argv[distIndex + 1];

const config = {
  src: 'src',
  dist: dist
};

const projects = {
  common: ts.createProject('src/common/tsconfig.json'),
  core: ts.createProject('src/core/tsconfig.json'),
};

const modules = Object.keys(projects);

modules.forEach(module => {
  gulp.task(module, () => {
    let project = projects[module];
    let dist = `${config.dist}/${module}`;

    return project
      .src()
      .pipe(project())
      .pipe(gulp.dest(dist));
  })
});

gulp.task('watch', () => {
  modules.forEach(module => {
    let modulePath = path.join(config.src, module, '**', '*.ts');
    gulp.watch([modulePath], ['tslint', module]);
  })
});

gulp.task('build', function(cb) {
  let delPatterns = [
    path.join(config.dist, '**', '*.ts'),
    path.join(config.dist, '**', '*.js')
  ];

  del.sync(delPatterns);

  gulpSequence('common', modules.filter((module) => module !== 'common'), cb);
});
