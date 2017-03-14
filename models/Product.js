let keystone = require('keystone'),
    Types = keystone.Field.Types;

let Product = new keystone.List("Product", {
    map: { name: 'title' },
    singular: 'Product',
    plural: 'Products',
    autokey: { path: 'slug', from: 'title', unique: true },
    defaultSort: '-createdAt'
});

Product.add({
    title: { type: String, required: true },
    price: { type: Number },
    qty: { type: Number },
    description: { type: Types.Html, wysiwyg: true, height: 300 },
    publishedAt: {type:Date, default:Date.now},
    image: { type: Types.CloudinaryImage },
    content: {
        brief: { type: Types.Html, wysiwyg: true, height: 150 },
        extended: { type: Types.Html, wysiwyg: true, height: 400 }
    }
});

Product.register();

