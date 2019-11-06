'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async getTotalBalance(){
    const requestData = this.ctx.query;
    let sql = 'SELECT total_balance.id as id,'+
              'total_balance.end_time as end_time,'+
              'total_balance.total_usd as total_usd,'+
              'total_balance.usd_teacher_holding as usd_teacher_holding,'+
              'total_balance.usd_teacher_withdrawing as usd_teacher_withdrawing,'+
              'total_balance.usd_student_holding as usd_student_holding,'+
              'total_balance.usd_student_spending as usd_student_spending,'+
              'total_balance.usd_giftcard_unuse as usd_giftcard_unuse ';
    if(requestData && requestData.startDate && requestData.endDate){
      sql +='FROM total_balance '+
            `WHERE total_balance.end_time BETWEEN '${requestData.startDate}' AND '${requestData.endDate}'`
    }else{
      sql +='FROM total_balance';
    }
    
    const results = await this.app.mysql.query(sql);
    this.ctx.body = {
      data: results
    }

  }
  
}

module.exports = HomeController;
