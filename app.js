import "babel-polyfill";
import Koa from 'koa';
import render from 'koa-swig';
import fs from "fs";
const router = require('koa-router')();
const app = new Koa();

app.context.render = render({
    root: ___dirname + '/view',
    autoescape: true,
    cache: 'memory', // disable, set to false
    ext: 'html',
    locals: locals,
    filters: filters,
    tags: tags,
    extensions: extensions,
    writeBody: false
});
/*app.use(async ctx => ctx.body = await ctx.render('index'));*/

router.get('/', async ctx => ctx.body = await ctx.render('index') );

// add router middleware:
app.use(router.routes());
app.listen(3000);
console.log('app started at port 3000...');