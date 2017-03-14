let keystone = require('keystone');

exports = module.exports = function (app) {
    let view = new keystone.View(req,res),
    locals = res.locals;

    // set locals
    locals.section = 'store';

    // Load Products
    view.query('products', keystone.list('Product').model().find());

    // Renderer view
    view.render('products');
}