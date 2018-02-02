import Koa from 'koa';
import router from 'koa-simple-router';
import co from 'co';
import serve from 'koa-static';
import render from 'koa-swig'
import views from 'koa-views';
import babel_co from 'babel-core/register';
import babel_po from 'babel-polyfill';
import initController from './controller/initController';
import path from 'path';

const app = new Koa();
//设置静态文件地址
app.use(serve(path.join(__dirname,'public')));

initController.init(app,router);
//设置模版
app.context.render = co.wrap(render({
    root: path.join(__dirname,'views'),
    autoescape: true,
    ext: 'html',
    writeBody: false
}));

app.listen(3000);

export default app;