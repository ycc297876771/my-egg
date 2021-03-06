'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
    const {router, controller} = app;

    router.get('/', controller.home.index);
    router.get('/login', controller.home.login);

    router.get('/user', controller.user.user);
    router.get('/user/all', controller.user.allUser);

    //io
    app.io.route('chat', app.io.controller.chat.index);
};


