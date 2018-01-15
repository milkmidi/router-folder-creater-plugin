const fs = require('fs');
const path = require('path');
const mkdirp = require('mkdirp');

const mkdirpAndWriteIndex = (p, template) => new Promise((resolve, reject) => {
  mkdirp(p, (err) => {
    if (err) {
      reject(new Error(err));
    } else {
      fs.writeFileSync(`${p}/index.html`, template);
      resolve();
    }
  });
});

function RouterFolderCreaterPlugin(staticDir, paths, options) {
  this.staticDir = staticDir;
  this.paths = paths;
  this.options = options || {};
}

// eslint-disable-next-line
RouterFolderCreaterPlugin.prototype.apply = function (compiler) {
  const { staticDir, paths } = this;
  compiler.plugin('after-emit', (compilation, done) => {
    const template = fs.readFileSync(path.join(staticDir, 'index.html'), 'utf-8');
    const promises = paths.map(p => mkdirpAndWriteIndex(path.join(staticDir, p), template));
    Promise.all(promises)
      .then(() => done())
      .catch((error) => {
        throw error;
      });
  });
};

module.exports = RouterFolderCreaterPlugin;
