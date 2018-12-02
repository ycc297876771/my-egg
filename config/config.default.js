'use strict';

module.exports = appInfo => {
    const config = exports = {};

    // use for cookie sign key, should change to your own and keep security
    config.keys = appInfo.name + '_0123456789-123456';

    config.mysql = require("./db").mysql;

    config.cluster = {
        listen: {
            path: '',
            port: 3000,
            hostname: '127.0.0.1',
        }
    };

    // add your config here
    config.middleware = [];

    config.view = {
        defaultViewEngine: 'ejs',
        mapping: {
            '.ejs': 'ejs',
        }
    };

    // config.logger = {  //关闭所有打印到终端的日志：
    //       consoleLevel: 'NONE',
    //   };
    config.onerror = {
        // 线上页面发生异常时，重定向到这个页面上
        errorPageUrl: '/error.html'
    };
    config.notfound = {
        // 线上页面发生异常时，重定向到这个页面上
        pageUrl: '/404.html'
    };

    config.middleware = ['errorHandler'],
        // 只对 /api 前缀的 url 路径生效
        config.errorHandler = {
            match: '/user',
        };

    return config;
};