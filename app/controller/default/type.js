'use strict';
const Controller = require('egg').Controller;

class typeController extends Controller {
    async getArticleType(){
        let sql = 'SELECT type.id as id,'+
            'type.typeName as typeName '+
            'FROM type'
        const results = await this.app.mysql.query(sql);
        this.ctx.body = {
            data: results
        }
    }
    async addANewType(){
        let typeName = this.ctx.request.body.typeName;
        let sql = "INSERT INTO type(typeName) VALUES ('"+ typeName +"')";
        const results = await this.app.mysql.query(sql);
        if(results.affectedRows === 1){
            this.ctx.body = {
                success: 1
            }
        }
        
    }
    async delType(){
        let typeId = this.ctx.request.body.typeId;
        let sql = `DELETE FROM type WHERE type.id = ${typeId}`;
        const results = await this.app.mysql.query(sql);
        if(results.affectedRows === 1){
            this.ctx.body = {
                success: 1
            }
        }
    }
}

module.exports = typeController;