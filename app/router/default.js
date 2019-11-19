module.exports = app =>{
    const { router, controller } = app;
    router.get('/default/getTotalBalance',controller.default.home.getTotalBalance)
    router.get('/default/getArticleData',controller.default.article.getArticleData)
    router.get('/default/getArticleType',controller.default.type.getArticleType)
    router.post('/default/addANewType',controller.default.type.addANewType)
    router.post('/default/delType',controller.default.type.delType)
}