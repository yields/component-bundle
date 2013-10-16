
var model = require('model');

module.exports = model('User')
  .attr('name')
  .attr('mail')
  .attr('nick');
