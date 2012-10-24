var _ = require('underscore');
var products = [

  {
    id: 1,
    name: 'Mac Book Pro',
    description: 'Apple 13 inch Mac Book Pro Notebook',
    price: 1000
  },
  {
    id:2,
    name: 'iPad',
    description: 'Apple 64GB 3G iPad',
    price: 899
  }
];

module.exports.all = products;

module.exports.find = function(id) {
  id = parseInt(id, 10);
  var found = null;
  _.each(products, function(product) {
    if(product.id === id) {
      found = product;
    }
  });
  return found;
};

module.exports.set = function(id, product) {
  id = parseInt(id, 10);
  product.id = id;
  products[id - 1] = product;
}

module.exports.new = function() {
  return {
    name: '',
    description: '',
    price: 0
  };
}

module.exports.delete = function(product) {
  console.log(product);
  if(_.contains(products, product)) {
    delete products[product];
  }
  else {
    throw new Error('Product not found');
  }
}

module.exports.insert = function(product) {
  products.push(product);
}