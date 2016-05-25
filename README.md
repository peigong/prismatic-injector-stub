# prismatic-injector-stub #

> 棱镜注射器服务器桩

## 桩服务的端口号 ##

- 3000：宿主测试页面端口（由gulp构建脚本中的browserSync启动）
- 3001：宿主页面管理端口（由gulp构建脚本中的browserSync启动）
- 3080：针头脚本地址端口（由本项目的`server/app.js`脚本启动）
- 3080：模板选择服务桩端口（由本项目的`server/app.js`脚本启动）
- 3081：模板库地址端口（由本项目的`server/app.js`脚本启动）
- 3082：模板数据服务桩端口（由本项目的`server/app.js`脚本启动）

## 测试脚本 ##

	node ./test/server

## 桩服务配置 ##

系统默认使用`localhost`访问服务。

如果需要更改，可以在项目目录下增加`loc.json`配置文件。

配置文件内容如下：

    {
        "hostname": "localhost"
    }

- **hostname：**访问服务的域名或IP地址。
