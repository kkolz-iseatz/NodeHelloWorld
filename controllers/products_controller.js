var products = require('../products');

module.exports.root = function(req, res) {
  res.render("root");
}

module.exports.index = function(req, res) {
  res.render('products/index', {products: products.all});
}

module.exports.new = function(req, res) {
  console.log("New Route");
  res.render('products/new', {product: req.body && req.body.product || products.new})
}

module.exports.show = function(req, res) {
  console.log("Show Route");
  var product = products.find(req.params.id);
  res.render('products/show', {product: product});
}

module.exports.edit = function(req, res) {
  var product = products.find(req.params.id);
  res.render('products/edit', {product: product});
}

module.exports.put = function(req, res) {
  var id = req.params.id;
  products.set(id, req.body.product);
  res.redirect('products/'+id);
}

module.exports.post = function(req, res) {
  var id = products.insert(req.body.product);
  res.redirect('products/'+id);
}