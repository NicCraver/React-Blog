'use strict';
/**
 * @param {Egg.Application} app - egg application
 */

module.exports = app => {
  const { router, controller } = app;
  // require('./router/default')(app);
  router.get('/article', controller.article.index);
};
