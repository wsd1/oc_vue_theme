# vue-theme for October CMS

This is theme benefits from https://github.com/scottbedard/oc-vuetober-theme.

该repo配合OctoberCMS使用。

本人的开发环境建立在 github repo下：https://github.com/wsd1/october-cms 

可以安装完成后再来实施本repo。


## 安装

假设CMS的安装路径是 oc/。

在路径： oc/theme/ 路径下，运行：

	git clone https://github.com/wsd1/oc_vue_theme.git

建议重命名为vue：

	mv oc_vue_theme vue

	cd vue

	npm install

	npm run build

其他操作：
``` bash

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

----


## 引入jquery，全局有效
	
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

## 如何在theme中使用 semantic-UI

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



