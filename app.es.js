'use strict';

require('babel-polyfill');

var _koa = require('koa');

var _koa2 = _interopRequireDefault(_koa);

var _koaSwig = require('koa-swig');

var _koaSwig2 = _interopRequireDefault(_koaSwig);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var router = require('koa-router')();
var app = new _koa2.default();

app.context.render = (0, _koaSwig2.default)({
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

router.get('/', function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(ctx) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.next = 2;
                        return ctx.render('index');

                    case 2:
                        return _context.abrupt('return', ctx.body = _context.sent);

                    case 3:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, undefined);
    }));

    return function (_x) {
        return _ref.apply(this, arguments);
    };
}());

// add router middleware:
app.use(router.routes());
app.listen(3000);
console.log('app started at port 3000...');
