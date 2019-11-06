module.exports = app =>{
    const { router, controller } = app;
    router.get('/default/getTotalBalance',controller.default.home.getTotalBalance)
    router.get('/default/getArticleData',controller.default.article.getArticleData)
}