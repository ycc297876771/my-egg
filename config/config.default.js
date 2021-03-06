'use strict';

const path = require("path");

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

    // io middleware
    config.io = {
        init: { }, // passed to engine.io
        namespace: {
            '/': {
                connectionMiddleware: [ 'auth' ],
                packetMiddleware: [ 'filter' ],
            },
            '/chat': {  //配置chat中间件
                connectionMiddleware: [ 'auth' ],
                packetMiddleware: [],
            },
        },
        //有redis-server 再打开
        // redis: {
        //     host: "127.0.0.1",
        //     port: 6379,
        //     auth_pass: "",
        //     db: 0,
        // },
    };

    config.static = {
        prefix : '/',
        dir: path.join(appInfo.baseDir, 'app/public'),
        dynamic: true,
        preload: false,
        buffer : false          // buffer: true in prod env, false in other envs
    };

    config.view = {
        defaultViewEngine: 'ejs',
        mapping: {
            '.ejs': 'ejs',
        }
    };

    // config.logger = {  //关闭所有打印到终端的日志：
    //       consoleLevel: 'NONE',         // 日志分为 NONE，DEBUG，INFO，WARN 和 ERROR 5 个级别。
    //       dir: '/path/to/your/custom/log/dir',
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
