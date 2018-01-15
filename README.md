# router-folder-creater-plugin
webpack plugin

## Getting started
### Installation

```bash
npm install router-folder-creater-plugin --save-dev
```

### Basic usage

Simply add `RouterFolderCreaterPlugin` to the plugin section in your Webpack config.

```javascript
var RouterFolderCreaterPlugin = require('router-folder-creater-plugin');

var webpackConfig = {
  // ...
  plugins: [
    new RouterFolderCreaterPlugin(
      path.join(__dirname, './dist'),
      ['/', '/about', '/other'],
      {}
    )
  ],
  // ...
}
```