var esnext = require('esnext');

module.exports = {
  process: function(src, path) {
    if (path.match(/\.js$/)) {
      return esnext.compile(src);
    }
    return src;
  }
}
