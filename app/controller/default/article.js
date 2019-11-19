'use strict';
const Controller = require('egg').Controller;

class articleController extends Controller {
    async getArticleData(){
        let sql = 'SELECT article.id as id,'+
             'type.typeName as typeName,'+
             'article.title as title,'+
             'article.article_content as content,'+
             'article.introduce as introduce,'+
             'article.addTime as addTime,'+
             'article.view_count as view_count ,'+
             '.type.typeName as typeName '+
             'FROM article LEFT JOIN type ON article.type_id = type.Id'
        const results = await this.app.mysql.query(sql);
        this.ctx.body = {
            data: results
        }
    } 
}

module.exports = articleController;