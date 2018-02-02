import index from './indexController';
const controllerInit = {
    init(app, router) {
    app.use(router(_ => {
        _.get('/index/index', index.index()),
        _.get('/index/update', index.update())
    }))
}
}
//导出路由中间件配置
export default controllerInit