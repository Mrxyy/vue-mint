+ 1.下载模块：
 ```javascript
//  低版本：
   {
    "babel-core": "^6.26.0",
    "babel-loader": "^7.1.2",
    "babel-plugin-transform-runtime": "^6.23.0",
    "babel-preset-env": "^1.6.1",
    "babel-preset-stage-0": "^6.24.1",
  }
  ```
 + 2.webpackp配置文件
 ```javascritp
    {
      test:/\.js$/,
      use:[batel-loader],
      exclude:/node_modules/
    }
 ```
 + 3.创建一个.babelrc文件
 ```javascript
 {
   preset:["env","stage-0"]
   plugins:["transform-runtime"],
 }
 ```