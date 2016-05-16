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