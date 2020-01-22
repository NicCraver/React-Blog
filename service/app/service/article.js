'use strict';

const Service = require('egg').Service;

class ArticleService extends Service {
  /**
   * 根据ID获取单个项目
   */
  async getProjectById() {
    const { ctx, app } = this;
    try {
      const results = await ctx.model.Article.find({
        // Article为modal/article.js里面命名的名字
        // _id: app.mongoose.Types.ObjectId('5e201af2804e8fdd7e192656'),
      });
      return results;
    } catch (err) {
      ctx.body = JSON.stringify(err);
    }
  }
}
module.exports = ArticleService;
