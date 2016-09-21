# vue-theme for October CMS

This is theme folk from https://github.com/scottbedard/oc-vuetober-theme.


## Install and setup 

在路径： oc/theme/ 路径下，运行：

从 github scottbedard/oc-vuetober-theme 项目模板生成 vue 文件夹

	vue init scottbedard/oc-vuetober-theme vue

	cd vue

	npm install
	
其他操作：
``` bash

# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
----


## Import jquery support

引入jquery，全局有效
	
	npm install jquery --save

修改 build/webpack.base.conf.js文件

```javascript

var webpack = require('webpack')

....

  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      'jQuery': 'jquery'
    })
  ],

```

## Import semantic-UI

随意找个目录，安装semantic UI

	npm install semantic-ui --save

提示很简单，基本按照缺省，多出来 semantic 文件夹 和 semantic.json。

修改输出路径和需要的components，修改semantic.json即可。

	cd semantic/
	gulp build

会生成dist目录，将其搬到 theme项目路径下 src\assets，便可以被 vue组件使用。

这样，在theme项目路径下src内部的代码，比如vue文件中可以引用js和css了。

例如：

```javascript

<script>
     import '../assets/semantic/semantic.min.js';
</script>


<style lang="scss" scoped>
@import "../assets/semantic/semantic.min.css";
</style>

```



