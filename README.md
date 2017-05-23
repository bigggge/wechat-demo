# wechat-demo

基于 lean 云引擎的微信公众号开发

## Run

安装依赖：

```
npm install
```

登录并关联应用：

```
lean login
lean switch
```

启动项目：

```
lean up
```

之后你就可以在 [localhost:3000](http://localhost:3000) 访问到你的应用了。


## DEBUG

开放本地的 3000 端口到互联网

```
ngrok http 3000          
```