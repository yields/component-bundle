var hbs = require('component-builder-handlebars');

var options = {
    extname: '.hbs',
    partialRegex: /^_/
};

function handlebars(builder) {
    builder.use(hbs(options));
}

module.exports = handlebars;
